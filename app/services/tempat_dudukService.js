const tempat_dudukRepository = require('../repositories/tempat_dudukRepository');

const getAllTempatDuduk = async () => {
    try {
        const tempat_duduk = tempat_dudukRepository.getAllTempatDuduk();
        return tempat_duduk;
    } catch (error) {
        throw error;
    }
}

const getAllTempatDudukById = async (id) => {
    try {
        const tempat_duduk = tempat_dudukRepository.getAllTempatDudukById(id);
        return tempat_duduk;
    } catch (error) {
        throw error;
    }
}

const getAllTempatDudukByKetersediaan = async (ketersediaan) => {
    try {
        const tempat_duduk = tempat_dudukRepository.getAllTempatDudukByKetersediaan(ketersediaan);
        return tempat_duduk;
    } catch (error) {
        throw error;
    }
}

const getAllTempatDudukByPrice = async (harga) => {
    try {
        const tempat_duduk = tempat_dudukRepository.getAllTempatDudukByPrice(harga);
        return tempat_duduk;
    } catch (error) {
        throw error;
    }
}

const createTempatDuduk = async (data) => {
    try {
        const tempat_duduk = tempat_dudukRepository.createTempatDuduk(data);
        return tempat_duduk;
    } catch (error) {
        throw error;
    }
}

const updateTempatDuduk = async (data, id) => {
    try {
        const tempat_duduk = tempat_dudukRepository.updateTempatDuduk(data, id);
        return tempat_duduk;
    } catch (error) {
        throw error;
    }
}

const deleteTempatDuduk = async (id) => {
    try {
        const tempat_duduk = tempat_dudukRepository.deleteTempatDuduk(id);
        return tempat_duduk;
    } catch (error) {
        throw error;
    }
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