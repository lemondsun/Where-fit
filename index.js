const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
//routes from home page
app.get('/', async (req, res) => {
  const locations = await Location.findAll()
  res.json(locations)
})

app.get('/location/:id', async (req, res) => {
  const id = req.params.id
  const location = await Location.findByPk(id)
  res.json(location)
})
// routes from login page, regiter




app.listen(PORT, () => console.log(`up on port ${PORT}`))

