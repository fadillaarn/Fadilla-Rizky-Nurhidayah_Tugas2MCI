const booking_materiRepository = require('../repositories/booking_materiRepository');

const getAllBookingMateri = async () => {
    try {
        const booking_materis = booking_materiRepository.getAllBookingMateri();
        return booking_materis;
    }
    catch (error) {
        throw error;
    }
};

const getAllBookingMateriById = async (id) => {
    try {
        const booking_materi = booking_materiRepository.getAllBookingMateriById(id);
        return booking_materi;
    }
    catch (error) {
        throw error;
    }
};

const getAllBookingMateriByIdBooking = async (id_booking) => {
    try {
        const booking_materi = booking_materiRepository.getAllBookingMateriByIdBooking(id_booking);
        return booking_materi;
    }
    catch (error) {
        throw error;
    }
};

const getAllBookingMateriByIdMateri = async (id_materi) => {
    try {
        const booking_materi = booking_materiRepository.getAllBookingMateriByIdMateri(id_materi);
        return booking_materi;
    }
    catch (error) {
        throw error;
    }
};

const createBookingMateri = async (data) => {
    try {
        const booking_materi = booking_materiRepository.createBookingMateri(data);
        return booking_materi;
    }
    catch (error) {
        throw error;
    }
};

const updateBookingMateri = async (data, id) => {
    try {
        const booking_materi = booking_materiRepository.updateBookingMateri(data, id);
        return booking_materi;
    }
    catch (error) {ook
        throw error;
    }
};

const deleteBookingMateri = async (id) => {
    try {
        const booking_materi = booking_materiRepository.deleteBookingMateri(id);
        return booking_materi;
    }
    catch (error) {
        throw error;
    }
};

module.exports = {
    getAllBookingMateri,
    getAllBookingMateriById,
    getAllBookingMateriByIdBooking,
    getAllBookingMateriByIdMateri,
    createBookingMateri,
    updateBookingMateri,
    deleteBookingMateri
}