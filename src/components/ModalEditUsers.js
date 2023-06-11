import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { putUpdateUser } from '../services/UserService'
import { toast } from 'react-toastify';
const ModalEditUsers = (props) => {
    const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleEditUser = async () => {
        let res = await putUpdateUser(name, job)
        console.log('check res:  ', res);
        if (res && res.updatedAt) {
            //success 
            handleEditUserFromModal({
                first_name: name,
                id: dataUserEdit.id
            })

            handleClose();
            toast.success('update user success')
        }
    }
    useEffect(() => {
        setName(dataUserEdit.first_name)
    }, [dataUserEdit])
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
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