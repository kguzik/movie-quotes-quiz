import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {Container, Row} from 'react-bootstrap'

function QuizInstructions(){
    return (
        <div id="instruction">
            <Helmet><title>Movie Quotes Quiz - Instruction</title></Helmet>
            <Container fluid>
                <Row className="mx-2 mx-md-5 mb-5 d-flex justify-content-center flex-column">
                    <h1 className="text-center mx-2 mx-md-5 my-5 font-weight-light">How to play?</h1>
                    <h2 className="text-center mb-5 font-weight-light">This is a simple game, just choose one of four options!</h2>
                    <Link to="quiz" className="btn-basic m-auto px-5">Start game</Link>
                </Row>
            </Container>
        </div>
    )
}

export default QuizInstructions;