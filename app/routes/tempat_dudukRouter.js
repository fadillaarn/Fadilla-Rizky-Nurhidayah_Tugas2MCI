const router = require('express').Router();
const tempat_dudukController = require('../controllers/tempat_dudukController');

router.get('/', tempat_dudukController.getAllTempatDuduk);
router.get('/:id', tempat_dudukController.getAllTempatDudukById);
router.get('/ketersediaan/:ketersediaan', tempat_dudukController.getAllTempatDudukByKetersediaan);
router.get('/harga/:harga', tempat_dudukController.getAllTempatDudukByPrice);
router.post('/', tempat_dudukController.createTempatDuduk);
router.put('/:id', tempat_dudukController.updateTempatDuduk);
router.delete('/:id', tempat_dudukController.deleteTempatDuduk);

module.exports = router;