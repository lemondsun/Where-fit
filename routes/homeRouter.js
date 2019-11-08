const express = require('express');
const app = express();
const cors = require('cors')
const homeRouter = Router();

homeRouter.use(cors())

homeRouter.get('/', async (req, res) => {
  const location = await  location.findAll()
  res.json(location)
})
homeRouter.get('/location/:id', async (req, res) => {
  const id = req.params.id
  const location = await Location.findByPk(id)
  res.json(location)
})

module.exports = homeRouter;