const {user} = require('../models')

const getAllUser = () => {
    return user.findAll(
        {
            attributes: ['id', 'nama', 'jenis_kelamin', 'email', 'notelp']
        }
    )
}

const getAllUserById = (id) => {
    return user.findOne({
        where: {
            id: id,   
        }
    })
}

const getAllUserByName = (nama) => {
    return user.findAll({
        where: {
            nama: nama
        }
    })
}

const getAllUserByJenisKelamin = (jenis_kelamin) => {
    return user.findAll({
        where: {
            jenis_kelamin: jenis_kelamin
        }
    })
}

const createUser = (data) => {
    return user.create(data)
}

const updateUser = (data, id) => {
    return user.update(data, {
        where: {
            id: id
        }
    })
}

const deleteUser = (id) => {
    return user.destroy({
        where: {
            id: id
        }
    })
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