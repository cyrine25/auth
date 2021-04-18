
const express=require('express');
const { register,login ,getAuthUser} = require('../controller/authController');
const { validator,registerRules,loginRules } = require('../middlewares/bodyValidator');
const isAuth = require('../middlewares/isAuth');
// const isAuth = require('../middlewares/isAuth');
const router = express.Router();



router.post('/register',registerRules(),validator,register)
router.post('/login',loginRules(),validator,login)
router.get('/theUser',isAuth,getAuthUser)


module.exports = router;
