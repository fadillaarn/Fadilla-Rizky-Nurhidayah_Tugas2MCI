const bookingService = require('../services/bookingService');

const getAllBooking = (req, res) => {
    bookingService.getAllBooking()
    .then((bookings) => {
        res.status(200).json({
            status: "success",
            message: "Booking retrieved successfully",
            data: bookings,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const getAllBookingById = (req, res) => {
    const id = req.params.id;
    bookingService.getAllBookingById(id)
    .then((booking) => {
        res.status(200).json({
            status: "success",
            message: "Booking retrieved successfully",
            data: booking,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const getAllBookingByDate = (req, res) => {
    const tgl_booking = req.params.tgl_booking;
    bookingService.getAllBookingByDate(tgl_booking)
    .then((booking) => {
        res.status(200).json({
            status: "success",
            message: "Booking retrieved successfully",
            data: booking,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const getAllBookingByStatus = (req, res) => {
    const status = req.params.status;
    bookingService.getAllBookingByStatus(status)
    .then((booking) => {
        res.status(200).json({
            status: "success",
            message: "Booking retrieved successfully",
            data: booking,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const createBooking = (req, res) => {
    const booking = req.body;
    bookingService.createBooking(booking)
    .then((booking) => {
        res.status(200).json({
            status: "success",
            message: "Booking created successfully",
            data: booking,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const updateBooking = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    console.log(data, id);
    bookingService.updateBooking(data, id)
    .then((booking) => {
        res.status(200).json({
            status: "success",
            message: "Booking updated successfully",
            data: booking,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const deleteBooking = (req, res) => {
    const id = req.params.id;
    bookingService.deleteBooking(id)
    .then((booking) => {
        res.status(200).json({
            status: "success",
            message: "Booking deleted successfully",
            data: booking,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

module.exports = {
    getAllBooking,
    getAllBookingById,
    getAllBookingByDate,
    getAllBookingByStatus,
    createBooking,
    updateBooking,
    deleteBooking
}