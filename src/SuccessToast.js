import Toast from 'react-bootstrap/Toast';
import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import {useState} from 'react';

function successToast(){
    const [show, setShow] = useState(false);

    return (
        <ToastContainer position="top-center">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                <strong className="me-auto">Records Submitted Successfully!</strong>
            </Toast.Header>
            <Toast.Body>Thank you for sharing the information!</Toast.Body>
            </Toast>
        </ToastContainer>
    );
} export default successToast;