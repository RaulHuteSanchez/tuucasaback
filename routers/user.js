const router = require('express').Router()
const controller = require('../controllers/users.js')
const validation = require('../middleware/validation.js');
// const middleware = require('../middleware/login.js')
// const checkRole = require('../middleware/decryptoken')


router.post('/register', validation.userValidationRules(), validation.validate, controller.registerUser);
// router.post('/login',controller.login)// logeamos User
// router.post('/admin', middleware.verificarToken, controller.createAdmin)
// router.get('/all', middleware.verificarToken,controller.searchAll) // Busca todos los usario
// router.get('/:id', middleware.verificarToken, controller.searchUser) // Busca por id
// router.delete('/', middleware.verificarToken, controller.deleteUser)//EliminarUser (solo admin)



module.exports = router;
