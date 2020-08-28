import React from 'react';
import Helmet from 'react-helmet';
import Icon from '@material-ui/core/Icon';
import questions from '../../questions.json';
import M from 'materialize-css';
import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonSound from '../../assets/audio/button-sound.mp3';
import Swal from 'sweetalert2';
import {Container, Row, Col} from 'react-bootstrap'

class Quiz extends React.Component {
    
    constructor(){
        super();
        this.state = { 
            questions: questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestion: 0,
            currentQuestionIndex: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            time: {}
        }
        this.interval = null;
    }

    displayQuestions = (questions, currentQuestion, nextQuestion, previousQuestion) => {
        let {currentQuestionIndex} = this.state;
        questions = this.state.questions;
        currentQuestion = questions[currentQuestionIndex];
        nextQuestion =  questions[currentQuestionIndex +1];
        previousQuestion =  questions[currentQuestionIndex -1];
        this.setState({
            currentQuestion,
            nextQuestion,
            previousQuestion,
            numberOfQuestions: questions.length,
            answer: currentQuestion && currentQuestion.movie ? currentQuestion.movie.title : null,
        });
    }

    componentDidMount(){
        this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
        this.startTimer();
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }
   
    handleClick = (e) => {
       if(e.target.innerHTML === this.state.answer) {
            document.getElementById('correct-sound').play();
            this.correctAnswer();
       } else {
            document.getElementById('wrong-sound').play();
            this.wrongAnswer();
       }
    }

    alertQuit = () => {
        Swal.fire({
            title: 'Are you sure to quit game?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, I want to quit.',
            cancelButtonText: 'No, I wanna play!',
            confirmButtonColor: '#ec3a3a',
            cancelButtonColor: '#2b89ea'
          }).then((result) => {
            if (result.value) {
              this.props.history.push('/');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Good decision',
                'Have fun :)',
                'success'
              )
            }
        });
    }

    alertTimeout = () => {
        Swal.fire({
            title: 'The time is over',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Go to summary'
          }).then((result) => {
            if (result.value) {
                this.endGame();
            } 
        });
    }

    handleQuitButtonClick = (e) => {
        this.playButtonSound();
        this.alertQuit();
    } 

    playButtonSound = () => {
        document.getElementById('button-sound').play();
    }

    correctAnswer = () => {
        M.toast({html: 'Correct!', classes: 'btn-basic btn-small', displayLength: 1500});
        this.setState(prevState => ({
            correctAnswers: prevState.correctAnswers + 1,
            numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1
        }), () => {
            if(this.state.nextQuestion === undefined){
                this.endGame();
            } else {
                this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            }
        });
    }

    wrongAnswer = () => {
        M.toast({html: 'Wrong :(', classes: 'btn-basic btn-small btn-red', displayLength: 1500});
        navigator.vibrate(1000);
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1
        }), () => {
            if(this.state.nextQuestion === undefined){
                this.endGame();
                this.setState(prevState => ({
                    currentQuestionIndex: prevState.currentQuestionIndex - 1
                }));
            } else {
            this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            }
        });
    }

    startTimer = () => {
        const countDownTime = Date.now() + 180000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;
            const minutes =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds =  Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.alertTimeout();
                })
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                });
            }
        }, 1000)
    }

    endGame = () => {
        const playerStats = {
            numberOfQuestions: this.state.numberOfQuestions,
            numberOfAnsweredQuestion: this.state.numberOfAnsweredQuestion,
            correctAnswer: this.state.correctAnswers,
            wrongAnswer: this.state.wrongAnswers
        }
        setTimeout(() => {
            this.props.history.push('/play/summary', playerStats);
        }, 1000)
    }

    render() {
        const {currentQuestion, numberOfQuestions, currentQuestionIndex, time} = this.state; 
        return (
            <div id="quiz">
                <Helmet><title>Movie Quotes Quiz - Quiz</title></Helmet>
                <audio id="correct-sound" src={correctNotification}></audio>
                <audio id="wrong-sound" src={wrongNotification}></audio>
                <audio id="button-sound" src={buttonSound}></audio>
                <Container fluid>
                    <Row className="mx-5">
                        <Col>
                            <p>{currentQuestionIndex + 1}/{numberOfQuestions}</p>
                        </Col>
                        <Col>
                            <p className="d-flex justify-content-end align-items-center"><Icon fontSize="small" className="mr-2">timer</Icon>{time.minutes}:{time.seconds}</p>
                        </Col>
                    </Row>
                    <h1 className="text-center mt-1 mt-md-4 mx-2 mx-md-5 font-weight-light">{currentQuestion.content}</h1>
                    <Row>
                        <Col xs={12} md={6} className="d-flex justify-content-center px-5">
                            <button onClick={this.handleClick} className="btn-basic w-100">{currentQuestion.firstAnswer}</button>
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center px-5">
                            <button onClick={this.handleClick} className="btn-basic w-100">{currentQuestion.secondAnswer}</button>
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center px-5">
                            <button onClick={this.handleClick} className="btn-basic w-100">{currentQuestion.thirdAnswer}</button>
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center px-5">
                            <button onClick={this.handleClick} className="btn-basic w-100">{currentQuestion.fourthAnswer}</button>
                        </Col>
                    </Row>
                    <Row className="ml-4 my-3">
                        <button className="btn-basic btn-red btn-small" id="quit-button" onClick={this.handleQuitButtonClick}>Quit</button>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Quiz;