const { Router } = require('express');
const userRouter = Router();
const { User  } = require('../models.js')
const { restrict } = require('../services/auth')

userRouter.route('/:id')
   //use id from body of call and not urlfront end needs to pass
  
.get (restrict, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    let user2 = user;
    // don't send real password_digest to fronend
    //so make copy and null it out
    user2.password_digest = null
    res.json(user2);
  } catch (e) {
    next(e)
  }
})

  .patch(restrict, async (req, res, next) => {
    try {
      console.log(req.params)
      const user = await User.findByPk(req.params.id);
      console.log(user.dataValues)
      req.body.password_digest =  user.password_digest
      await user.update(req.body)
      res.json(user)
    } catch (e) {
      next(e)
    }
  })
  .delete(restrict, async (req, res, next) => {
    try {
      const user = await User.destroy({ where: { id: req.params.id } })
      res.json(req.body.id)
    } catch (e) {
      next(e)
    }
  })

module.exports = userRouter;