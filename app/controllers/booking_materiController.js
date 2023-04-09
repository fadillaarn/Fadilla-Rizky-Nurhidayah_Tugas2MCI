const booking_materiService = require('../services/booking_materiService');

const getAllBookingMateri = (req, res) => {
    booking_materiService.getAllBookingMateri()
    .then((booking_materis) => {
        res.status(200).json({
            status: "success",
            message: "BookingMateri retrieved successfully",
            data: booking_materis,
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

const getAllBookingMateriById = (req, res) => {
    booking_materiService.getAllBookingMateriById(req.params.id)
    .then((booking_materi) => {
        res.status(200).json({
            status: "success",
            message: "BookingMateri retrieved successfully",
            data: booking_materi,
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

const getAllBookingMateriByIdBooking = (req, res) => {
    booking_materiService.getAllBookingMateriByIdBooking(req.params.id_booking)
    .then((booking_materi) => {
        res.status(200).json({
            status: "success",
            message: "BookingMateri retrieved successfully",
            data: booking_materi,
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

const getAllBookingMateriByIdMateri = (req, res) => {
    booking_materiService.getAllBookingMateriByIdMateri(req.params.id_materi)
    .then((booking_materi) => {
        res.status(200).json({
            status: "success",
            message: "BookingMateri retrieved successfully",
            data: booking_materi,
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

const createBookingMateri = (req, res) => {
    const data = req.body;
    booking_materiService.createBookingMateri(data)
    .then((booking_materi) => {
        res.status(201).json({
            status: "success",
            message: "BookingMateri created successfully",
            data: booking_materi,
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

const updateBookingMateri = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    booking_materiService.updateBookingMateri(data, id)
    .then((booking_materi) => {
        res.status(200).json({
            status: "success",
            message: "BookingMateri updated successfully",
            data: booking_materi,
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

const deleteBookingMateri = (req, res) => {
    const id = req.params.id;
    booking_materiService.deleteBookingMateri(id)
    .then((booking_materi) => {
        res.status(200).json({
            status: "success",
            message: "BookingMateri deleted successfully",
            data: booking_materi,
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
    getAllBookingMateri,
    getAllBookingMateriById,
    getAllBookingMateriByIdBooking,
    getAllBookingMateriByIdMateri,
    createBookingMateri,
    updateBookingMateri,
    deleteBookingMateri,
}