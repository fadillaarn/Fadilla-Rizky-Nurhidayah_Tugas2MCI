const {booking} = require('../models')

const getAllBooking = () => {
    return booking.findAll(
        {
            attributes: ['id', 'tgl_booking', 'total_harga', 'status']
        }
    )
}

const getAllBookingById = (id) => {
    return booking.findOne({
        where: {
            id: id
        }
    })
}

const getAllBookingByDate = (tgl_booking) => {
    return booking.findAll({
        where: {
            tgl_booking: tgl_booking
        }
    })
}

const getAllBookingByStatus = (status) => {
    return booking.findAll({
        where: {
            status: status
        }
    })
}

const createBooking = (data) => {
    return booking.create(data)
}

const updateBooking = (data, id) => {
    console.log("Repository1", data, id);
    return booking.update(data, {
        where: {
            id: id
        }
    }, 
    console.log("Repository2", data, id))
}

const deleteBooking = (id) => {
    return booking.destroy({
        where: {
            id: id
        }
    })
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