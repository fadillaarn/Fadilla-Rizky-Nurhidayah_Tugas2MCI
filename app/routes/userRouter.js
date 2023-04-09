const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUser);
router.get('/:id', userController.getAllUserById);
router.get('/nama/:nama', userController.getAllUserByName);
router.get('/jenis_kelamin/:jenis_kelamin', userController.getAllUserByJenisKelamin);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;