const { Router } = require('express');
const locationRouter = Router();
const { Location } = require('../models.js')
const { restrict } = require('../services/auth')

// 
// 
// need to add restrict back in on all these routes
// example
// .get (restrict, async (req, res, next) => {


locationRouter.get('/', async (req, res, next) => {
  try {
    const location = await Location.findAll({
      where: {
        ...req.body,
        userId: req.body.user_id,
      },
    }
    )
    res.json(location)
  } catch (e) {
    next(e)
  }
})

  
  locationRouter.post('/', async (req, res, next) => {
      try {
        const location = await Location.create({
            ...req.body,
            userId: req.body.user_id,
        });
        res.json(location);
      } catch (e) {
        next(e)
      }
    })


locationRouter.route('/:id')
   //use id from body of call and not urlfront end needs to pass
  
.get ( async (req, res, next) => {
  try {
    const location = await Location.findByPk(req.body.id);
    res.json(location);
  } catch (e) {
    next(e)
  }
})

  .put(async (req, res, next) => {
    try {
      const location = await Location.findByPk(req.body.id);
      await location.update(req.body)
      res.json(location)
    } catch (e) {
      next(e)
    }
  })
  .delete( async (req, res, next) => {
    try {
      const location = await Location.destroy({ where: { id: req.body.id } })
      res.json(req.body.id)
    } catch (e) {
      next(e)
    }
  })

module.exports = locationRouter;