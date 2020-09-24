import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions'
import Quiz from './components/quiz/Quiz';
import Summary from './components/quiz/Summary';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './Config';
import Footer from './components/Footer';
import Header from './components/Header';

function getQuestions() {
  const ref = firebase.firestore().collection('quotes');
  return ref.get().then(item => {
    return item.docs.map(doc => doc.data());
  });
}

function App() {
  return (
    <>
      <Header iconName="movie" appName="Movie Quotes Quiz"/>
      <Router basename='/movie-quotes-quiz'>
        <Route path="/" exact component={Home}/>
        <Route path="/play/instruction" exact component={QuizInstructions}/>
        <Route path="/play/quiz" exact render={(props) => <Quiz getQuestions={getQuestions} {...props} />}/>
        <Route path="/play/summary" exact render={(props) => <Summary getQuestions={getQuestions} {...props} />}/>
      </Router>
      <Footer title="Designed &amp; created by Karolina Guzik"/>
    </>
  )
}

export default App;
