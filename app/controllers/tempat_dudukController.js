const tempat_dudukService = require('../services/tempat_dudukService');

const getAllTempatDuduk = (req, res) => {
    tempat_dudukService.getAllTempatDuduk()
    .then((tempat_duduks) => {
        res.status(200).json({
            status: "success",
            message: "TempatDuduk retrieved successfully",
            data: tempat_duduks,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const getAllTempatDudukById = (req, res) => {
    const id = req.params.id;
    tempat_dudukService.getAllTempatDudukById(id)
    .then((tempat_duduk) => {
        res.status(200).json({
            status: "success",
            message: "TempatDuduk retrieved successfully",
            data: tempat_duduk,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const getAllTempatDudukByKetersediaan = (req, res) => {
    const ketersediaan = req.params.ketersediaan;
    tempat_dudukService.getAllTempatDudukByKetersediaan(ketersediaan)
    .then((tempat_duduk) => {
        res.status(200).json({
            status: "success",
            message: "TempatDuduk retrieved successfully",
            data: tempat_duduk,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const getAllTempatDudukByPrice = (req, res) => {
    const harga = req.params.harga;
    tempat_dudukService.getAllTempatDudukByPrice(harga)
    .then((tempat_duduk) => {
        res.status(200).json({
            status: "success",
            message: "TempatDuduk retrieved successfully",
            data: tempat_duduk,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const createTempatDuduk = (req, res) => {
    const tempat_duduk = req.body;
    tempat_dudukService.createTempatDuduk(tempat_duduk)
    .then((tempat_duduk) => {
        res.status(201).json({
            status: "success",
            message: "TempatDuduk created successfully",
            data: tempat_duduk,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const updateTempatDuduk = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    tempat_dudukService.updateTempatDuduk(data, id)
    .then((tempat_duduk) => {
        res.status(200).json({
            status: "success",
            message: "TempatDuduk updated successfully",
            data: tempat_duduk,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

const deleteTempatDuduk = (req, res) => {
    const id = req.params.id;
    tempat_dudukService.deleteTempatDuduk(id)
    .then(() => {
        res.status(200).json({
            status: "success",
            message: "TempatDuduk deleted successfully",
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
}

module.exports = {
    getAllTempatDuduk,
    getAllTempatDudukById,
    getAllTempatDudukByKetersediaan,
    getAllTempatDudukByPrice,
    createTempatDuduk,
    updateTempatDuduk,
    deleteTempatDuduk,
};