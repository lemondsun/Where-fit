const { Router } = require('express');
const activityRouter = Router();
const { Activity } = require('../models.js')
const { restrict } = require('../services/auth')

// 
// 
// need to add restrict back in on all these routes
// example
// .get (restrict, async (req, res, next) => {


activityRouter.get('/', restrict, async (req, res, next) => {
  try {
    const activity = await Activity.findAll({
      where: {
        ...req.body,
        locationId: req.body.location_id,
      },
    }
    )
    res.json(activity)
  } catch (e) {
    next(e)
  }
})


activityRouter.post('/', restrict, async (req, res, next) => {
  try {
    const activity = await Activity.create({
      ...req.body,
      locationId: req.body.location_id,
    });
    res.json(activity);
  } catch (e) {
    next(e)
  }
})


activityRouter.route('/:id')
  //use id from body of call and not urlfront end needs to pass

  .get(restrict, async (req, res, next) => {
    try {
      const activity = await Activity.findByPk(req.body.id);
      res.json(activity);
    } catch (e) {
      next(e)
    }
  })

  .put(restrict, async (req, res, next) => {
    try {
      const activity = await Activity.findByPk(req.body.id);
      await activity.update(req.body)
      res.json(activity)
    } catch (e) {
      next(e)
    }
  })
  .delete(restrict, async (req, res, next) => {
    try {
      const activity = await Activity.destroy({ where: { id: req.body.id } })
      res.json(req.body.id)
    } catch (e) {
      next(e)
    }
  })

module.exports = activityRouter;