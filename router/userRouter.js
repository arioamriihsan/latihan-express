const express = require('express')
const router = express.Router()
const {userController} = require('../controller/index')
//semua alamat/url di API

router.get('/getUsers', userController.getAllUsers)

router.get('/getById/:id', userController.getUserById)
//tulis di postman http://localhost:2000/users/getById/1
//output keluar object data dengan id 1
//menggunakan params

router.get('/search-username', userController.searchByUsername)
//tulis di postman http://localhost:2000/users/search-username?username=adm
//output keluar array of object dari username admin karena 'adm' menyerupai 'admin
//menggunakan query

router.get('/login/:username/:password',userController.Login)
router.get('/search-role',userController.searchByRole)

module.exports = router


//=======================PENTING===========================
//localhost:2000/users/getById/1 => req.params
//localhost:2000/users/getById?id=1 => req.query