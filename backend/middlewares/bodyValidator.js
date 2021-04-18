const {validationResult,body}=require('express-validator')

const registerRules = () => [
    body("name", "this field is required").notEmpty(),
    body("lastName", "this field is required").notEmpty(),
    body("email", "email is not valid").isEmail(),
    body("password", "password should contain at least 6 characters").isLength({
      min: 6,
    }),
  ];
const loginRules=()=>[
  body("email","email is not valid").isEmail(),
  body("password","password should contain at least 6 characters").isLength({min:6})
]
  const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json(errors.array().map((err) => ({ msg: err.msg })));
    } else {
      next();
    }
  };



  module.exports = { registerRules, validator ,loginRules};