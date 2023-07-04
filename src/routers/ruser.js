const router = require('express').Router()
const controller = require('../controllers/cusers.js')
const validation = require('../middleware/validation.js');
const middleware = require('../middleware/authentication.js')
// const checkRole = require('../middleware/decryptoken')


router.post('/register', validation.userValidationRules(), validation.validate, controller.registerUser);
router.get('/login',validation.emailPasswordValidate(), validation.validate, controller.login)// logeamos User
router.get('/:id', middleware.verifierToken, controller.searchUser) // Busca por id
// router.post('/admin', middleware.verificarToken, controller.createAdmin)
// router.get('/all', middleware.verificarToken,controller.searchAll) // Busca todos los usario
// router.delete('/', middleware.verificarToken, controller.deleteUser)//EliminarUser (solo admin)

module.exports = router;