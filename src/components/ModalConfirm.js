
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete } = props;

    const ConfirmDelete = () => {

    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        Are you sure to delete this user
                        <b> email={dataUserDelete.email}?</b>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => ConfirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalConfirm