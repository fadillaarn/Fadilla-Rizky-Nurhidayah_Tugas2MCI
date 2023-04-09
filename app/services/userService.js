const userRepository = require('../repositories/userRepository');

const getAllUser = async () => {
    try {
        const users = userRepository.getAllUser();
        return users;
    } catch (error) {
        throw error;
    }
}

const getAllUserById = async (id) => {
    try {
        const user = userRepository.getAllUserById(id);
        return user;
    } catch (error) {
        throw error;
    }
}

const getAllUserByName = async (nama) => {
    try {
        const user = userRepository.getAllUserByName(nama);
        return user;
    } catch (error) {
        throw error;
    }
}

const getAllUserByJenisKelamin = async (jenis_kelamin) => {
    try {
        const user = userRepository.getAllUserByJenisKelamin(jenis_kelamin);
        return user;
    } catch (error) {
        throw error;
    }
}

const createUser = async (data) => {
    try {
        const user = userRepository.createUser(data);
        return user;
    } catch (error) {
        throw error;
    }
}

const updateUser = async (data, id) => {
    try {
        const user = userRepository.updateUser(data, id);
        return user;
    } catch (error) {
        throw error;
    }
}

const deleteUser = async (id) => {
    try {
        const user = userRepository.deleteUser(id);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllUser,
    getAllUserById,
    getAllUserByName,
    getAllUserByJenisKelamin,
    createUser,
    updateUser,
    deleteUser
}