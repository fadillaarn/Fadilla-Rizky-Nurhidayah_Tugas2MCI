const {materi} = require('../models')

const getAllMateri = () => {
    return materi.findAll(
        {
            attributes: ['id', 'nama_materi', 'pemateri', 'tanggal']
        }
    )
}

const getAllMateriById = (id) => {
    return materi.findOne({
        where: {
            id: id
        }
    })
}

const getAllMateriByName = (nama_materi) => {
    return materi.findAll({
        where: {
            nama_materi: nama_materi
        }
    })
}

const getAllMateriByPemateri = (pemateri) => {
    return materi.findAll({
        where: {
            pemateri: pemateri
        }
    })
}

const getAllMateriByDate = (tanggal) => {
    return materi.findAll({
        where: {
            tanggal: tanggal
        }
    })
}

const createMateri = (data) => {
    return materi.create(data)
}

const updateMateri = (data, id) => {
    return materi.update(data, {
        where: {
            id: id
        }
    })
}

const deleteMateri = (id) => {
    return materi.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllMateri,
    getAllMateriById,
    getAllMateriByName,
    getAllMateriByPemateri,
    getAllMateriByDate,
    createMateri,
    updateMateri,
    deleteMateri
}