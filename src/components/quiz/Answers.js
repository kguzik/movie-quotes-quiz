import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'

function Answers(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <p onClick={handleShow} className="text-center show-answers">
                {props.title}
            </p>
            <Modal show={show} onHide={handleClose} scrollable={true} className="modal-answers">
            <Modal.Header closeButton>
                <Modal.Title>Answers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    {props.questions.map(question => 
                        <li className={question.isCorrect ? 'correct-answer' : 'wrong-answer'} key={question.id}>
                            <a target="_blank" href={question.link}>{question.content}</a> - <strong>{question.title}</strong>
                        </li>
                    )}
                </ul>
            </Modal.Body>
            </Modal>
      </>
    )
}

export default Answers;