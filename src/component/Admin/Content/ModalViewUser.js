import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';

function ModalUpdateUser(props) {
    const { show, setShow, dataView } = props

    const handleClose = () => {
        setShow(false);
    };

    const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('*********')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        if (!_.isEmpty(dataView)) {
            //update State
            setEmail(dataView.email);
            setUsername(dataView.username);
            setRole(dataView.role);
            setPreviewImage(dataView.image ? `data:image/jpeg;base64,${dataView.image}` : '')
        }
    }, [dataView]);

    return (
        <>
            <Modal className='modal-add-user' show={show} onHide={handleClose} size='s' centered backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Information user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="user-info">
                            <div className='image-detail'>
                                {previewImage ?
                                    <img src={previewImage} alt='NoImage' className='rev-img-preview' />
                                    :
                                    <span>---No Image---</span>
                                }
                            </div>
                            <div className="user-details">
                                <div>
                                    <span>Name: {username}</span>
                                </div>
                                <div>
                                    <span>Email: {email}</span>
                                </div><div>
                                    <span>Password: ********</span>
                                </div><div>
                                    <span>Role: {role}</span>
                                </div>

                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ModalUpdateUser