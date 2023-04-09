const {tempat_duduk} = require('../models')

const getAllTempatDuduk = () => {
    return tempat_duduk.findAll(
        {
            attributes: ['id', 'ketersediaan', 'harga']
        }
    )
}

const getAllTempatDudukById = (id) => {
    return tempat_duduk.findOne({
        where: {
            id: id
        }
    })
}

const getAllTempatDudukByKetersediaan = (ketersediaan) => {
    return tempat_duduk.findAll({
        where: {
            ketersediaan: ketersediaan
        }
    })
}

const getAllTempatDudukByPrice = (harga) => {
    return tempat_duduk.findAll({
        where: {
            harga: harga
        }
    })
}

const createTempatDuduk = (data) => {
    return tempat_duduk.create(data)
}

const updateTempatDuduk = (data, id) => {
    return tempat_duduk.update(data, {
        where: {
            id: id
        }
    })
}

const deleteTempatDuduk = (id) => {
    return tempat_duduk.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllTempatDuduk,
    getAllTempatDudukById,
    getAllTempatDudukByKetersediaan,
    getAllTempatDudukByPrice,
    createTempatDuduk,
    updateTempatDuduk,
    deleteTempatDuduk
}