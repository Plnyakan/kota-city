const router = require("express").Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validinfo = require("../middleware/validinfo");
const authorization = require('../middleware/authorization');

//registering

router.post("/register", validinfo ,async (req, res) => {
    const { email, name, password } = req.body;
  
    try {
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email
      ]);
  
      if (user.rows.length !== 0) {
        return res.status(401).json("User already exist!");
      }

      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      const bcryptPassword =  await bcrypt.hash(password,salt);


      const newUser = await pool.query(
        "INSERT INTO users (name,email, password) VALUES ($1,$2,$3) RETURNING *",[name,email,bcryptPassword]
      );

      const token = jwtGenerator(newUser.rows[0].user_id);

      res.json({token})


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error")
    }
});


router.post("/login",validinfo ,async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    
    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is Incorrect")
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if(!validPassword){
      return res.status(401).json("Password or Email is Incorrect");
      }

    const token = jwtGenerator(user.rows[0].user_id);
    res.json({token});


  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error")
  }
})

router.get("/is-verify",authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(error.message);
    res.status(500).send("Server Error") 
  }
})


module.exports = router;