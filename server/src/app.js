console.log('hello!!!')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const parser = require('xml2json')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/currencies', (req, res) => {
  fs.readFile('./xml/Currencies.xml', function (err, data) {
    if (err) {
      console.log(err)
    }
    res.send(parser.toJson(data))
  })
})

app.get('/get-table', (req, res) => {
  fs.readFile('./xml/' + req.query.name + '.xml', function (err, data) {
    if (err) {
      console.log(err)
    }
    res.send(parser.toJson(data))
  })
})

app.post('/save-table', (req, res) => {
  let tableName = Object.keys(req.body)[0]
  console.log(req.body, Object.keys(req.body)[0])
  fs.writeFile('./xml/' + tableName + '.xml', parser.toXml(req.body), function (err) {
    if (err) {
      console.log(err)
    } else {
      res.send('It\'s saved!')
    }
  })
})

app.listen(process.env.PORT || 8083)
console.log('Listen port ' + (process.env.PORT || 8083))
