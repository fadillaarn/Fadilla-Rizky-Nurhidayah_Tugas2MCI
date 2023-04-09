const router = require('express').Router();
const booking_materiController = require('../controllers/booking_materiController');

router.get('/', booking_materiController.getAllBookingMateri);
router.get('/:id', booking_materiController.getAllBookingMateriById);
router.get('/id_booking/:id_booking', booking_materiController.getAllBookingMateriByIdBooking);
router.get('/id_materi/:id_materi', booking_materiController.getAllBookingMateriByIdMateri);
router.post('/', booking_materiController.createBookingMateri);
router.put('/:id', booking_materiController.updateBookingMateri);
router.delete('/:id', booking_materiController.deleteBookingMateri);

module.exports = router;