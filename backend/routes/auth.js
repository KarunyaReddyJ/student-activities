const router = require('express').Router()
const { loginPost } = require('../controllers/loginControllers')
const { signupPost } = require('../controllers/signupController')
router.
    route('/login')
    .post(loginPost)


router.
    route('/signup')
     .post(signupPost)


module.exports = router