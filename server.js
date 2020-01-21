const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8081
const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('portfolio/dist'))
} else {
  app.use(express.static('portfolio/public'))
}

app.use((req, res) => {
  res.sendFile(path.join(__dirname, './portfolio/dist/index.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
