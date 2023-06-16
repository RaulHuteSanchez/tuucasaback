const { check, validationResult } = require('express-validator');

exports.userValidationRules = () => {
  return [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').isLength({ min: 5 }),
  ];
};

exports.emailPasswordValidate = () => {
  return [
    check('email', 'El email es obligatorio').not().isEmpty(),
  ];
}

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
