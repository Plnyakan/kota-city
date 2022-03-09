const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const port = 3000

// middleware
app.use(express.json()) // =>  allows us to read the request or req body
app.use(cors())



//routes

//adding user details
app.post('/user', async (req, res) => {
    try {
        // await
        console.log(req.body)
        const { name,surname,email,password,role,phone,address } = req.body
        const newOrg = await pool.query(
            "INSERT INTO profile (name,surname,email,password,role,phone,address) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *", // returning * lets us see the data in the json response
            [name,surname,email,password,role,phone,address]
        ) 
        res.json(newOrg.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//get user information
app.get('/user/:id', async (req, res) => {
    const { id } = req.params
    try {
        const org = await pool.query("SELECT * FROM profile WHERE profile_id = $1", [id]) 
        // $1 is a placeholder, then the 2nd argument is what that variable is 
        //going to be
        res.json(org.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//updating user details

app.put('/user/:id', async (req, res) => {
    try {
        const { id } = req.params // where
        const { name,surname,email,password,role,phone,address  } = req.body // grab the new info
        const updateOrg = await pool.query(
            "UPDATE profile SET name = $1, surname = $2, email = $3, password = $4, role = $5, phone = $6, address = $7 WHERE profile_id = $8", 
            [name,surname,email,password,role,phone,address , id]
        )
        res.json('The user details was updated')
    } catch (err) {
        console.error(err.message)
    }
})

// delete a user
app.delete('/user/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteOrg = await pool.query(
            "DELETE FROM profile WHERE profile_id = $1", [id]
        )
        res.json('account was deleted successfully')
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})