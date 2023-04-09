const pembayaranRepository = require('../repositories/pembayaranRepository');

const getAllPembayaran = async () => {
    try {
        const pembayarans = pembayaranRepository.getAllPembayaran();
        return pembayarans;
    } catch (error) {
        throw error;
    }
}

const getAllPembayaranById = async (id) => {
    try {
        const pembayaran = pembayaranRepository.getAllPembayaranById(id);
        return pembayaran;
    } catch (error) {
        throw error;
    }
}

const getAllPembayaranByDate = async (tgl_pembayaran) => {
    try {
        const pembayaran = pembayaranRepository.getAllPembayaranByDate(tgl_pembayaran);
        return pembayaran;
    } catch (error) {
        throw error;
    }
}

const getAllPembayaranByMethod = async (metode) => {
    try {
        const pembayaran = pembayaranRepository.getAllPembayaranByMethod(metode);
        return pembayaran;
    } catch (error) {
        throw error;
    }
}

const createPembayaran = async (data) => {
    try {
        const pembayaran = pembayaranRepository.createPembayaran(data);
        return pembayaran;
    } catch (error) {
        throw error;
    }
}

const updatePembayaran = async (data, id) => {
    try {
        const pembayaran = pembayaranRepository.updatePembayaran(data, id);
        return pembayaran;
    } catch (error) {
        throw error;
    }
}

const deletePembayaran = async (id) => {
    try {
        const pembayaran = pembayaranRepository.deletePembayaran(id);
        return pembayaran;
    } catch (error) {
        throw error;
    }
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