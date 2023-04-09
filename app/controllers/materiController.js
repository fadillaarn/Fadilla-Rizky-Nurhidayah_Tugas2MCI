const materiService = require('../services/materiService')

const getAllMateri = (req, res) => {
    materiService.getAllMateri()
    .then((materis) => {
        res.status(200).json({
            status: "success",
            message: "Materi retrieved successfully",
            data: materis,
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

const getAllMateriById = (req, res) => {
    const id = req.params.id;
    materiService.getAllMateriById(id)
    .then((materi) => {
        res.status(200).json({
            status: "success",
            message: "Materi retrieved successfully",
            data: materi,
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

const getAllMateriByName = (req, res) => {
    const nama_materi = req.params.nama_materi;
    materiService.getAllMateriByName(nama_materi)
    .then((materi) => {
        res.status(200).json({
            status: "success",
            message: "Materi retrieved successfully",
            data: materi,
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

const getAllMateriByPemateri = (req, res) => {
    const pemateri = req.params.pemateri;
    materiService.getAllMateriByPemateri(pemateri)
    .then((materi) => {
        res.status(200).json({
            status: "success",
            message: "Materi retrieved successfully",
            data: materi,
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

const getAllMateriByDate = (req, res) => {
    const tanggal = req.params.tanggal;
    materiService.getAllMateriByDate(tanggal)
    .then((materi) => {
        res.status(200).json({
            status: "success",
            message: "Materi retrieved successfully",
            data: materi,
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

const createMateri = (req, res) => {
    const data = req.body;
    materiService.createMateri(data)
    .then((materi) => {
        res.status(200).json({
            status: "success",
            message: "Materi created successfully",
            data: materi,
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

const updateMateri = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    materiService.updateMateri(data, id)
    .then((materi) => {
        res.status(200).json({
            status: "success",
            message: "Materi updated successfully",
            data: materi,
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

const deleteMateri = (req, res) => {
    const id = req.params.id;
    materiService.deleteMateri(id)
    .then((materi) => {
        res.status(200).json({
            status: "success",
            message: "Materi deleted successfully",
            data: materi,
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
    getAllMateri,
    getAllMateriById,
    getAllMateriByName,
    getAllMateriByPemateri,
    getAllMateriByDate,
    createMateri,
    updateMateri,
    deleteMateri,
}