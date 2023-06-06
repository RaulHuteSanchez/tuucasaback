const router = require('express').Router()
const controller = require('../controllers/users.js')
const middleware= require('../middleware/login.js')
// const checkRole = require('../middleware/decryptoken')


router.post('/login',controller.login)// logeamos User
router.post('/',  controller.createUser) // creamos usuario
router.post('/admin', middleware.verificarToken, controller.createAdmin)
router.get('/all', middleware.verificarToken,controller.searchAll) // Busca todos los usario
router.get('/:id', middleware.verificarToken, controller.searchUser) // Busca por id
router.delete('/', middleware.verificarToken, controller.deleteUser)//EliminarUser (solo admin)



module.exports = router;
