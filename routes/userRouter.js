const { Router } = require('express');
const userRouter = Router();
const { User  } = require('../models.js')
const { restrict } = require('../services/auth')

// 
// 
// need to add restrict back in on all these routes
// example
// .get (restrict, async (req, res, next) => {


userRouter.route('/:id')
   //use id from body of call and not urlfront end needs to pass
  
.get ( async (req, res, next) => {
  try {
    const user = await User.findByPk(req.body.id);
    let user2 = user;
    // don't send real password_digest to fronend
    //so make copy and null it out
    user2.password_digest = null
    res.json(user2);
  } catch (e) {
    next(e)
  }
})

  .put(async (req, res, next) => {
    try {
      const user = await User.findByPk(req.body.id);
      req.body.password_digest =  user.password_digest
      await user.update(req.body)
      res.json(user)
    } catch (e) {
      next(e)
    }
  })
  .delete( async (req, res, next) => {
    try {
      const user = await User.destroy({ where: { id: req.body.id } })
      res.json(req.body.id)
    } catch (e) {
      next(e)
    }
  })

module.exports = userRouter;