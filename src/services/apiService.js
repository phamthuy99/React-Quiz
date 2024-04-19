import axios from '../utils/axiosCustomize'

const postCreateNewUser = (email, password, username, role, image) => {
    // call API FormData
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data)
}

const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}

const putUpdateUser = (id, username, role, image) => {
    // call API FormData
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/v1/participant', data)
}
//delete user by urlencoded
const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } })
}

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}
//login user by urlencoded
const postLogin = (email, password) => {
    return axios.post('api/v1/login', { email, password })
}
//register user by urlencoded
const postRegister = (username, email, password) => {
    return axios.post('api/v1/register', { username, email, password })
}

export {
    postCreateNewUser,
    getAllUsers,
    putUpdateUser,
    deleteUser,
    getUserWithPaginate,
    postLogin,
    postRegister
}