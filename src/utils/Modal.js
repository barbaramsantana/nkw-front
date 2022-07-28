import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiTrash } from 'react-icons/bi';
import api from '../services/api';
import { getToken } from '../Auth/index';
import './styled.css';

async function excluirDesejo(val) {
    try {
        const token = getToken();
        const response = await api.delete(`/desejos/${val}`, { headers: { token: `Bearer ${token}` } });
        window.location.reload();

    } catch (err) {
        console.error(err);
    }
}

const OpenModal = ({item}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <BiTrash size="1.5rem" color="#BB6BD9" onClick={handleShow} />
            <Modal dialogClassName="custom-dialog" show={show} onHide={handleClose}>
                <Modal.Body>
                    Tem certeza que deseja excluir este desejo?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button className="confirmationButton"  style={{ backgroundColor: "#BB6BD9", border:0 }} onClick={async () =>{await excluirDesejo(item)}} >
                        Excluir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OpenModal;