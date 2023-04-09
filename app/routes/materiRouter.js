const router = require('express').Router();
const materiController = require('../controllers/materiController');

router.get('/', materiController.getAllMateri);
router.get('/:id', materiController.getAllMateriById);
router.get('/nama_materi/:nama_materi', materiController.getAllMateriByName);
router.get('/pemateri/:pemateri', materiController.getAllMateriByPemateri);
router.get('/tanggal/:tanggal', materiController.getAllMateriByDate);
router.post('/', materiController.createMateri);
router.put('/:id', materiController.updateMateri);
router.delete('/:id', materiController.deleteMateri);

module.exports = router;