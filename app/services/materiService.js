const materiRepository = require('../repositories/materiRepository')

const getAllMateri = async () => {
    try {
        const materis = materiRepository.getAllMateri()
        return materis
    }
    catch (error) {
        throw error
    }
}

const getAllMateriById = async (id) => {
    try {
        const materi = materiRepository.getAllMateriById(id)
        return materi
    }
    catch (error) {
        throw error
    }
}

const getAllMateriByName = async (nama_materi) => {
    try {
        const materi = materiRepository.getAllMateriByName(nama_materi)
        return materi
    }
    catch (error) {
        throw error
    }
}

const getAllMateriByPemateri = async (pemateri) => {
    try {
        const materi = materiRepository.getAllMateriByPemateri(pemateri)
        return materi
    }
    catch (error) {
        throw error
    }
}

const getAllMateriByDate = async (tanggal) => {
    try {
        const materi = materiRepository.getAllMateriByDate(tanggal)
        return materi
    }
    catch (error) {
        throw error
    }
}

const createMateri = async (data) => {
    try {
        const materi = materiRepository.createMateri(data)
        return materi
    }
    catch (error) {
        throw error
    }
}

const updateMateri = async (data, id) => {
    try {
        const materi = materiRepository.updateMateri(data, id)
        return materi
    }
    catch (error) {
        throw error
    }
}

const deleteMateri = async (id) => {
    try {
        const materi = materiRepository.deleteMateri(id)
        return materi
    }
    catch (error) {
        throw error
    }
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