const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const dotenv = require('dotenv')
dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(helmet())
app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
   
    res.json({
        message: "hello moij nguoi",
    })
})

app.listen(port, () => {
    console.log("server us listening on port:"+ port)
}) 