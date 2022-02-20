const express = require('express');
const router = express.Router();

const userController = require ('../controllers/usersController.js')


router.get ('/register', userController.register)

router.get ('/profile', userController.profile)

router.get ('/login', userController.login)

module.exports = router;