const {booking_materi} = require('../models');

const getAllBookingMateri = () => {
    return booking_materi.findAll(
        {
            attributes: ['id', 'id_booking', 'id_materi']
        }
    )
}

const getAllBookingMateriById = (id) => {
    return booking_materi.findOne({
        where: {
            id: id
        }
    })
}

const getAllBookingMateriByIdBooking = (id_booking) => {
    return booking_materi.findAll({
        where: {
            id_booking: id_booking
        }
    })
}

const getAllBookingMateriByIdMateri = (id_materi) => {
    return booking_materi.findAll({
        where: {
            id_materi: id_materi
        }
    })
}

const createBookingMateri = (data) => {
    return booking_materi.create(data)
}

const updateBookingMateri = (data, id) => {
    return booking_materi.update(data, {
        where: {
            id: id
        }
    })
}

const deleteBookingMateri = (id) => {
    return booking_materi.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllBookingMateri,
    getAllBookingMateriById,
    getAllBookingMateriByIdBooking,
    getAllBookingMateriByIdMateri,
    createBookingMateri,
    updateBookingMateri,
    deleteBookingMateri
}