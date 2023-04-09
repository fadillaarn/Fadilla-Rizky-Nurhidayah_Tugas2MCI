const {pembayaran} =  require('../models')

const getAllPembayaran = () => {
    return pembayaran.findAll(
        {
            attributes: ['id', 'tgl_pembayaran', 'total', 'metode']
        }
    )
}

const getAllPembayaranById = (id) => {
    return pembayaran.findOne({
        where: {
            id: id
        }
    })
}

const getAllPembayaranByDate = (tgl_pembayaran) => {
    return pembayaran.findAll({
        where: {
            tgl_pembayaran: tgl_pembayaran
        }
    })
}

const getAllPembayaranByMethod = (metode) => {
    return pembayaran.findAll({
        where: {
            metode: metode
        }
    })
}

const createPembayaran = (data) => {
    return pembayaran.create(data)
}

const updatePembayaran = (data, id) => {
    return pembayaran.update(data, {
        where: {
            id: id
        }
    })
}

const deletePembayaran = (id) => {
    return pembayaran.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllPembayaran,
    getAllPembayaranById,
    getAllPembayaranByDate,
    getAllPembayaranByMethod,
    createPembayaran,
    updatePembayaran,
    deletePembayaran
}