const router = require('express').Router();
const pembayaranController = require('../controllers/pembayaranController');

router.get('/', pembayaranController.getAllPembayaran);
router.get('/:id', pembayaranController.getAllPembayaranById);
router.get('/tgl_pembayaran/:tgl_pembayaran', pembayaranController.getAllPembayaranByDate);
router.get('/metode/:metode', pembayaranController.getAllPembayaranByMethod);
router.post('/', pembayaranController.createPembayaran);
router.put('/:id', pembayaranController.updatePembayaran);
router.delete('/:id', pembayaranController.deletePembayaran);

module.exports = router;