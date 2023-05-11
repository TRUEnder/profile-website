const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('assets'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

const PORT = 8000
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
})