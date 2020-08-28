import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap'

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnswererQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0
        }
    }

    componentDidMount(){
        const { state } = this.props.location;
        this.setState({
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestion: state.numberOfAnsweredQuestion,
            correctAnswer: state.correctAnswer,
            wrongAnswer: state.wrongAnswer
        });
    }

    render() {
        console.log(this.props);
        return (
            <div id="summary">
                <Helmet><title>Movie Quotes Quiz - Summary</title></Helmet>
                <Container fluid>
                    <Row className="mx-2 mx-md-5 mb-5 d-flex justify-content-center flex-column">
                        <h1 className="text-center mx-2 mx-md-5 my-5 font-weight-light">You were right in <strong>{Math.floor((this.state.correctAnswer / this.state.numberOfQuestions) * 100) } %</strong> !</h1>
                        <p className="summary-info text-center">Correct answers: <strong>{this.state.correctAnswer}</strong></p>
                        <p className="summary-info text-center">Wrong answers: <strong>{this.state.wrongAnswer}</strong></p>
                        <p className="summary-info text-center">Number of answered questions: <strong>{this.state.numberOfAnsweredQuestion}</strong></p>
                        <p className="summary-info text-center">Number of questions: <strong>{this.state.numberOfQuestions}</strong></p>
                    </Row>
                    <Row className="mx-2 mx-md-5 mb-5 d-flex">
                        <Col xs={12} md={6} className="mb-5 justify-content-center d-flex">
                            <Link to="/" className="btn-basic m-auto px-5">Back to home</Link>
                        </Col>
                        <Col xs={12} md={6} className="mb-5 justify-content-center d-flex">
                            <Link to="quiz" className="btn-basic m-auto px-5">Play again!</Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Summary;