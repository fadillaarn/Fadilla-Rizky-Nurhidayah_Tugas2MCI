const userService = require('../services/userService');

const getAllUser = (req, res) => {
    userService.getAllUser()
    .then((users) => {
        res.status(200).json({
            status: "success",
            message: "User retrieved successfully",
            data: users,
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

const getAllUserById = (req, res) => {
    const id = req.params.id;
    userService.getAllUserById(id)
    .then((user) => {
        res.status(200).json({
            status: "success",
            message: "User retrieved successfully",
            data: user,
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

const getAllUserByName = (req, res) => {
    const nama = req.params.nama;
    userService.getAllUserByName(nama)
    .then((user) => {
        res.status(200).json({
            status: "success",
            message: "User retrieved successfully",
            data: user,
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

const getAllUserByJenisKelamin = (req, res) => {
    const jenis_kelamin = req.params.jenis_kelamin;
    userService.getAllUserByJenisKelamin(jenis_kelamin)
    .then((user) => {
        res.status(200).json({
            status: "success",
            message: "User retrieved successfully",
            data: user,
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

const createUser = (req, res) => {
    const user = req.body;
    userService.createUser(user)
    .then((user) => {
        res.status(200).json({
            status: "success",
            message: "User created successfully",
            data: user,
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

const updateUser = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    userService.updateUser(data, id)
    .then((user) => {
        res.status(200).json({
            status: "success",
            message: "User updated successfully",
            data: user,
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

const deleteUser = (req, res) => {
    const id = req.params.id;
    userService.deleteUser(id)
    .then(() => {
        res.status(200).json({
            status: "success",
            message: "User deleted successfully",
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
    getAllUser,
    getAllUserById,
    getAllUserByName,
    getAllUserByJenisKelamin,
    createUser,
    updateUser,
    deleteUser,
};