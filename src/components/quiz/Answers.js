import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'

function Answers(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {props.title}
            </Button>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Answers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    {props.questions.map(question => <li key={question.id}>{question.content} - <strong>{question.title}</strong></li>)}
                </ul>
            </Modal.Body>
            </Modal>
      </>
    )
}

export default Answers;