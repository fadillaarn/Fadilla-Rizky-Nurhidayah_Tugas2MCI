const router = require('express').Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBooking);
router.get('/:id', bookingController.getAllBookingById);
router.get('/tgl_booking/:tgl_booking', bookingController.getAllBookingByDate);
router.get('/status/:status', bookingController.getAllBookingByStatus);
router.post('/', bookingController.createBooking);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;