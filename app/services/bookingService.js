const bookingRepository = require('../repositories/bookingRepository');

const getAllBooking = async () => {
    try {
        const bookings = bookingRepository.getAllBooking();
        return bookings;
    }
    catch (error) {
        throw error;
    }
}

const getAllBookingById = async (id) => {
    try {
        const booking = bookingRepository.getAllBookingById(id);
        return booking;
    } catch (error) {
        throw error;
    }
}

const getAllBookingByDate = async (tgl_booking) => {
    try {
        const booking = bookingRepository.getAllBookingByDate(tgl_booking);
        return booking;
    } catch (error) {
        throw error;
    }
}

const getAllBookingByStatus = async (status) => {
    try {
        const booking = bookingRepository.getAllBookingByStatus(status);
        return booking;
    } catch (error) {
        throw error;
    }
}

const createBooking = async (data) => {
    try {
        const booking = bookingRepository.createBooking(data);
        return booking;
    } catch (error) {
        throw error;
    }
}

const updateBooking = async (data, id) => {
    try {
        console.log("service1", data, id);
        const booking = bookingRepository.updateBooking(data, id);
        console.log("service2", data, id);
        return booking;
    } catch (error) {
        throw error;
    }
}

const deleteBooking = async (id) => {
    try {
        const booking = bookingRepository.deleteBooking(id);
        return booking;
    } catch (error) {
        throw error;
    }
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