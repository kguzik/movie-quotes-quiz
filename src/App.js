import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions'
import Quiz from './components/quiz/Quiz';
import Summary from './components/quiz/Summary';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
  return (
    <div>
      <div className="logo">
        <Icon fontSize="large">movie</Icon>
        <strong>Movie Quotes Quiz</strong>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div id="footer">
      <p>Desing & created by Karolina Guzik</p>
    </div>
  )
}

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/play/instruction" exact component={QuizInstructions}/>
      <Route path="/play/quiz" exact component={Quiz}/>
      <Route path="/play/summary" exact component={Summary}/>
    </Router>
    <Footer/>
    </>
  )
}

export default App;
