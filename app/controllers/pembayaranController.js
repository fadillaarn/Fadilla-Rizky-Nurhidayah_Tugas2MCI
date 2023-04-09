const pembayaranService = require('../services/pembayaranService');

const getAllPembayaran = (req, res) => {
    pembayaranService.getAllPembayaran()
    .then((pembayarans) => {
        res.status(200).json({
            status: "success",
            message: "Pembayaran retrieved successfully",
            data: pembayarans,
        });
    })
    .catch((error) => {
        res.status(500).json({
            status: "error",
            message: error.message,
            data: error,
        });
    });
};

const getAllPembayaranById = (req, res) => {
    const id = req.params.id;
    pembayaranService.getAllPembayaranById(id)
    .then((pembayaran) => {
        res.status(200).json({
            status: "success",
            message: "Pembayaran retrieved successfully",
            data: pembayaran,
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

const getAllPembayaranByDate = (req, res) => {
    const tgl_pembayaran = req.params.tgl_pembayaran;
    pembayaranService.getAllPembayaranByDate(tgl_pembayaran)
    .then((pembayaran) => {
        res.status(200).json({
            status: "success",
            message: "Pembayaran retrieved successfully",
            data: pembayaran,
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

const getAllPembayaranByMethod = (req, res) => {
    const data = req.params.metode;
    pembayaranService.getAllPembayaranByMethod(data)
    .then((pembayaran) => {
        res.status(200).json({
            status: "success",
            message: "Pembayaran retrieved successfully",
            data: pembayaran,
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

const createPembayaran = (req, res) => {
    const pembayaran = req.body;
    pembayaranService.createPembayaran(pembayaran)
    .then((pembayaran) => {
        res.status(201).json({
            status: "success",
            message: "Pembayaran created successfully",
            data: pembayaran,
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

const updatePembayaran = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    pembayaranService.updatePembayaran(data, id)
    .then((pembayaran) => {
        res.status(200).json({
            status: "success",
            message: "Pembayaran updated successfully",
            data: pembayaran,
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

const deletePembayaran = (req, res) => {
    const id = req.params.id;
    pembayaranService.deletePembayaran(id)
    .then((pembayaran) => {
        res.status(200).json({
            status: "success",
            message: "Pembayaran deleted successfully",
            data: pembayaran,
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
    getAllPembayaran,
    getAllPembayaranById,
    getAllPembayaranByDate,
    getAllPembayaranByMethod,
    createPembayaran,
    updatePembayaran,
    deletePembayaran
};