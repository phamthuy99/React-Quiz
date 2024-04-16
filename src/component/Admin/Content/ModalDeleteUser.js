import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';
function ModalDeleteUser(props) {
    const { show, setShow, dataDelete, setCurrentPage, fetListUsersWithPaginate } = props

    const handleClose = () => setShow(false);
    const handDelete = async () => {
        // response phản hồi API
        let data = await deleteUser(dataDelete.id)

        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            // gọi lại hàm call API
            //await props.fetListUsers();
            setCurrentPage(1) // set về page 1 -> so sánh page hiện tại với 1 -> table re-render currentPage
            await fetListUsersWithPaginate(1); // lấy data page 1
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop='static' centered>
                <Modal.Header closeButton>
                    <Modal.Title>Notification Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user:
                    <b>{dataDelete && dataDelete.email ? ` ${dataDelete.email}` : ""} </b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;