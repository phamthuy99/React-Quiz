import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FcPlus } from 'react-icons/fc'
import { useEffect, useState } from 'react'
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService"
import ModalUpdateUser from './ModalUpdateUser'
import ModalViewUser from './ModalViewUser'
import ModalDeleteUser from './ModalDeleteUser'
import TableUserPaginate from './TableUserPaginate'
function ManageUser(props) {
    const LIMIT_USER = 10
    const [pageCount, setPageCount] = useState(0) // default = 0 => không có data thanh phân trang sẽ được ẩn đi
    const [currentPage, setCurrentPage] = useState(1) // xác định user đang ở trang nào
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [dataUpdate, setDataUpdate] = useState({})
    const [dataView, setDataView] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [listUsers, setListUsers] = useState([])
    //chạy lần đầu vào trang sau khi DOM được render
    useEffect(() => {
        //fetListUsers();
        // mặc định lần đầu vào page 1
        fetListUsersWithPaginate(1)
    }, [])
    const fetListUsers = async () => {
        const res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }
    const fetListUsersWithPaginate = async (page) => {
        const res = await getUserWithPaginate(page, LIMIT_USER)
        if (res.EC === 0) {
            setListUsers(res.DT.users)
            setPageCount(res.DT.totalPages)
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
                        {/* <TableUser
                            listUsers={listUsers}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                            handleClickBtnView={handleClickBtnView}
                            handleClickBtnDelete={handleClickBtnDelete} /> */}
                        <TableUserPaginate
                            listUsers={listUsers}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                            handleClickBtnView={handleClickBtnView}
                            handleClickBtnDelete={handleClickBtnDelete}
                            fetListUsersWithPaginate={fetListUsersWithPaginate}
                            pageCount={pageCount}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>

                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetListUsers={fetListUsers}
                    fetListUsersWithPaginate={fetListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetListUsers={fetListUsers}
                    fetListUsersWithPaginate={fetListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    fetListUsers={fetListUsers}
                    fetListUsersWithPaginate={fetListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetListUsers={fetListUsers}
                    fetListUsersWithPaginate={fetListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}
export default ManageUser