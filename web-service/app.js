const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes')

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/api', routes)

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))