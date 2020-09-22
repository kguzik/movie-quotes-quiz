import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {Container, Row} from 'react-bootstrap';

function Home(){
    return (
        <div id="home">
            <Helmet><title>Movie Quotes Quiz - Home page</title></Helmet>
            <Container fluid>
                <Row className="mx-2 mx-md-5 mb-5 d-flex justify-content-center flex-column">
                    <h1 className="text-center mx-2 mx-md-5 my-5 font-weight-light">Movie Quotes Quiz will test how well you know famous quotes!</h1>
                    <Link to="play/instruction" className="btn-basic m-auto px-5">Let's play</Link>
                </Row>
            </Container>
        </div>
    )
}

export default Home;