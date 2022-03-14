const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

// middleware
app.use(express.json()) // =>  allows us to read the request or req body
app.use(cors())



//routes


//register and login routes

app.use("/auth",require("./routes/jwtAuth"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})