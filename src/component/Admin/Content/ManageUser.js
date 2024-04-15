import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useEffect, useState } from 'react'
import TableUser from './TableUser'
import { getAllUsers } from "../../../services/apiService"
import ModalUpdateUser from './ModalUpdateUser'
import ModalViewUser from './ModalViewUser'
import ModalDeleteUser from './ModalDeleteUser'
function ManageUser(props) {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [listUsers, setListUsers] = useState([])
    //chạy sau khi DOM được render
    useEffect(() => {
        fetListUsers();
    }, [])
    const fetListUsers = async () => {
        const res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true)
        setDataUpdate(user)
    }
    const handleClickBtnView = (user) => {
        setShowModalViewUser(true)
        setDataView(user)
    }
    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)
    }
    return (
        <div>
            <div className="manage-user-container">
                <div className="title">
                    Manage User
                </div>
                <div className="users-content">
                    <div className='btn-add-new'>
                        <button className='btn btn-primary' onClick={() => setShowModalCreateUser(true)}>
                            <FcPlus /> Add New User</button>
                    </div>
                    <div className='table-users-container'>
                        <TableUser
                            listUsers={listUsers}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                            handleClickBtnView={handleClickBtnView}
                            handleClickBtnDelete={handleClickBtnDelete} />
                    </div>

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetListUsers={fetListUsers} />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetListUsers={fetListUsers} />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    fetListUsers={fetListUsers} />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetListUsers={fetListUsers} />
            </div>
        </div>
    )
}
export default ManageUser