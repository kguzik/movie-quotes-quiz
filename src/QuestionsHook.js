import {useState, useEffect } from 'react';
import firebase from './Config';

function QuestionsHook() {
  const [quotes, setQuotes] = useState([]);
  const ref = firebase.firestore().collection('quotes');

  function getQuotes(){
    ref.get().then(item => {
      const items = item.docs.map(doc => doc.data())
      setQuotes(items);
    });
  }

  useEffect(() => {
      getQuotes();
  }, []);

  const questions = [];
  quotes.map(quote => questions.push(quote));
  return questions;
}

export default QuestionsHook;