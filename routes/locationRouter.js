const { Router } = require('express');
const locationRouter = Router({ mergeParams: true });
const { Location } = require('../models.js')
const { restrict } = require('../services/auth')


locationRouter.get('/', restrict, async (req, res, next) => {
  try {
    const id = req.params.id
    const location = await Location.findAll({
      where: {
        userId: id
      },
    }
    )
    res.json(location)
  } catch (e) {
    next(e)
  }
})


locationRouter.post('/', restrict, async (req, res, next) => {
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

  .get(restrict, async (req, res, next) => {
    try {
      const location = await Location.findByPk(req.params.id);
      res.json(location);
    } catch (e) {
      next(e)
    }
  })

  .put(restrict, async (req, res, next) => {
    try {
      console.log(req)
      const location = await Location.findByPk(req.body.id);
      await location.update(req.body)
      res.json(location)
    } catch (e) {
      next(e)
    }
  })
  .delete(restrict, async (req, res, next) => {
    try {
      const location = await Location.destroy({ where: { id: req.params.id } })
      res.json(req.params.id)
    } catch (e) {
      next(e)
    }
  })

module.exports = locationRouter;