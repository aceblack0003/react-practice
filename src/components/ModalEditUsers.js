import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateUser } from '../services/UserService'
import { toast } from 'react-toastify';
const ModalEditUsers = (props) => {
    const { show, handleClose, dataUserEdit } = props;
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleEditUser = () => {

    }
    useEffect(() => {
        setName(dataUserEdit.first_name)
    }, [dataUserEdit])
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <div class="form-group">
                            <label className='form-label'>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className='form-label'>Job</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Job"
                                value={job}
                                onChange={(event) => setJob(event.target.value)}
                            />
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalEditUsers