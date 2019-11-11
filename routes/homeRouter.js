const express = require('express');
// const app = express();
const cors = require('cors')
const { Location, User } = require('../models');
const homeRouter = express();
const { hashPassword, genToken, checkPassword, restrict } = require('../services/auth');

homeRouter.use(cors())

const buildAuthResponse = (user) => {
  const userData = {
    username: user.username,
    id: user.id
  };
  const token = genToken(userData);
  
  return {
    user: userData,
    token,
  }
}



homeRouter.get('/', async (req, res) => {
  const location = await  Location.findAll()
  res.json(location)
})
homeRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const location = await Location.findByPk(id)
  res.json(location)
})
homeRouter.post('/register', async (req, res) => {
  try {
    const password_digest = await hashPassword(req.body.password);
    const { username } = req.body;

    const user = await User.create({
      username,
      password_digest,
    });

    const respData = buildAuthResponse(user);

    res.json(respData);
  } catch (e) {
    next(e);
  }
});

homeRouter.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (await checkPassword(req.body.password, user.password_digest)) {
      const respData = buildAuthResponse(user);

      res.json(respData);
    } else {
      res.status(401).send('Invalid Credentials');
    }
  } catch (e) {
    res.status(401).send('Invalid Credentials');
    next(e);
     // if user does not exist we go out to lunch and don't come back
    // in console we get error next not defined 
    // so put in the 401 above next
  }
});

homeRouter.get('/verify', restrict, (req, res) => {
  const user = res.locals.user;
  res.json(user);
})

module.exports = homeRouter;