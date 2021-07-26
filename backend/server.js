const express = require('express')
const app = express()
const routesUrls = require('./routes/routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(routesUrls)
app.listen(process.env.PORT || 4000)