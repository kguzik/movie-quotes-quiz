(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(20),o=n.n(r),i=n(17),c=n(6),u=n(134),l=n(18),m=n(128),d=n(129);var f=function(){return s.a.createElement("div",{id:"home"},s.a.createElement(l.a,null,s.a.createElement("title",null,"Movie Quotes Quiz - Home page")),s.a.createElement(m.a,{fluid:!0},s.a.createElement(d.a,{className:"mx-2 mx-md-5 mb-5 d-flex justify-content-center"},s.a.createElement("h1",{className:"text-center mx-2 mx-md-5 my-5 font-weight-light"},"Movie Quotes Quiz will test how well you know famous quotes!"),s.a.createElement(i.b,{to:"play/instruction",className:"btn-basic m-auto px-5"},"Let's play"))))};var b=function(){return s.a.createElement("div",{id:"instruction"},s.a.createElement(l.a,null,s.a.createElement("title",null,"Movie Quotes Quiz - Instruction")),s.a.createElement(m.a,{fluid:!0},s.a.createElement(d.a,{className:"mx-2 mx-md-5 mb-5 d-flex justify-content-center flex-column"},s.a.createElement("h1",{className:"text-center mx-2 mx-md-5 my-5 font-weight-light"},"How to play?"),s.a.createElement("h2",{className:"text-center mb-5 font-weight-light"},"This is a simple game, just choose one of four options!"),s.a.createElement(i.b,{to:"quiz",className:"btn-basic m-auto px-5"},"Start game"))))},w=n(33),p=n(34),E=n(40),h=n(38),x=n(47),Q=n.n(x),g=n(57),y=n.n(g),v=n(58),A=n.n(v),N=n(59),q=n.n(N),k=n(28),O=n.n(k),I=n(132),j=n(60),C=n(135),B=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(w.a)(this,n),(e=t.call(this)).displayQuestions=function(t,n,a,s){var r=e.state.currentQuestionIndex;n=(t=e.state.questions)[r],a=t[r+1],s=t[r-1],e.setState({currentQuestion:n,nextQuestion:a,previousQuestion:s,numberOfQuestions:t.length,answer:n&&n.title,loading:!1})},e.handleClick=function(t){t.target.innerHTML===e.state.answer?(document.getElementById("correct-sound").play(),e.correctAnswer()):(document.getElementById("wrong-sound").play(),e.wrongAnswer())},e.alertQuit=function(){O.a.fire({title:"Are you sure to quit game?",icon:"question",showCancelButton:!0,confirmButtonText:"Yes, I want to quit.",cancelButtonText:"No, I wanna play!",confirmButtonColor:"#ec3a3a",cancelButtonColor:"#2b89ea"}).then((function(t){t.value?e.props.history.push("/"):t.dismiss===O.a.DismissReason.cancel&&O.a.fire("Good decision","Have fun :)","success")}))},e.alertTimeout=function(){O.a.fire({title:"The time is over",icon:"error",showCancelButton:!1,confirmButtonText:"Go to summary"}).then((function(t){t.value&&e.endGame()}))},e.handleQuitButtonClick=function(){e.playButtonSound(),e.alertQuit()},e.playButtonSound=function(){document.getElementById("button-sound").play()},e.correctAnswer=function(){Q.a.toast({html:"Correct!",classes:"btn-basic btn-small",displayLength:1500}),e.state.questions[e.state.currentQuestionIndex].isCorrect=!0,e.setState((function(e){return{correctAnswers:e.correctAnswers+1,numberOfAnsweredQuestion:e.numberOfAnsweredQuestion+1,currentQuestionIndex:e.currentQuestionIndex+1}}),(function(){void 0===e.state.nextQuestion?e.endGame():e.displayQuestions(e.state.questions,e.state.currentQuestion,e.state.nextQuestion,e.state.previousQuestion)}))},e.wrongAnswer=function(){Q.a.toast({html:"Wrong :(",classes:"btn-basic btn-small btn-red",displayLength:1500}),e.state.questions[e.state.currentQuestionIndex].isCorrect=!1,e.setState((function(e){return{wrongAnswers:e.wrongAnswers+1,numberOfAnsweredQuestion:e.numberOfAnsweredQuestion+1,currentQuestionIndex:e.currentQuestionIndex+1}}),(function(){void 0===e.state.nextQuestion?(e.endGame(),e.setState((function(e){return{currentQuestionIndex:e.currentQuestionIndex-1}}))):e.displayQuestions(e.state.questions,e.state.currentQuestion,e.state.nextQuestion,e.state.previousQuestion)}))},e.startTimer=function(){var t=Date.now()+18e4;e.interval=setInterval((function(){var n=new Date,a=t-n,s=Math.floor(a%36e5/6e4),r=Math.floor(a%6e4/1e3);a<0?(clearInterval(e.interval),e.setState({time:{minutes:0,seconds:0}},(function(){e.alertTimeout()}))):e.setState({time:{minutes:s,seconds:r}})}),1e3)},e.endGame=function(){var t={numberOfQuestions:e.state.numberOfQuestions,numberOfAnsweredQuestion:e.state.numberOfAnsweredQuestion,correctAnswer:e.state.correctAnswers,wrongAnswer:e.state.wrongAnswers,questions:e.state.questions};setTimeout((function(){e.props.history.push("/play/summary",t)}),1e3)},e.state={questions:[],currentQuestion:{},nextQuestion:{},previousQuestion:{},answer:"",numberOfQuestions:0,numberOfAnsweredQuestion:0,currentQuestionIndex:0,correctAnswers:0,wrongAnswers:0,time:{},loading:!0},e.interval=null,e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.getQuestions().then((function(t){return e.setState({questions:t})})).then((function(){return e.displayQuestions(e.state.questions,e.state.currentQuestion,e.state.nextQuestion,e.state.previousQuestion)})),this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.currentQuestion,n=e.numberOfQuestions,a=e.currentQuestionIndex,r=e.time,o=e.loading;return o?s.a.createElement(d.a,{className:"d-flex align-items-center justify-content-center h-100"},s.a.createElement(j.BarLoader,{size:120,color:"#1db954",loading:o})):s.a.createElement(C.a,{in:!0},s.a.createElement("div",{id:"quiz"},s.a.createElement(l.a,null,s.a.createElement("title",null,"Movie Quotes Quiz - Quiz")),s.a.createElement("audio",{id:"correct-sound",src:y.a}),s.a.createElement("audio",{id:"wrong-sound",src:A.a}),s.a.createElement("audio",{id:"button-sound",src:q.a}),s.a.createElement(m.a,{fluid:!0},s.a.createElement(d.a,{className:"mx-5"},s.a.createElement(I.a,null,s.a.createElement("p",null,a+1,"/",n)),s.a.createElement(I.a,null,s.a.createElement("p",{className:"d-flex justify-content-end align-items-center"},s.a.createElement(u.a,{fontSize:"small",className:"mr-2"},"timer"),r.minutes,":",r.seconds))),s.a.createElement("h1",{className:"text-center mt-1 mt-md-4 mx-2 mx-md-5 font-weight-light"},t.content),s.a.createElement(d.a,null,s.a.createElement(I.a,{xs:12,md:6,className:"d-flex justify-content-center px-5"},s.a.createElement("button",{onClick:this.handleClick,className:"btn-basic w-100",key:a},t.firstAnswer)),s.a.createElement(I.a,{xs:12,md:6,className:"d-flex justify-content-center px-5"},s.a.createElement("button",{onClick:this.handleClick,className:"btn-basic w-100",key:a},t.secondAnswer)),s.a.createElement(I.a,{xs:12,md:6,className:"d-flex justify-content-center px-5"},s.a.createElement("button",{onClick:this.handleClick,className:"btn-basic w-100",key:a},t.thirdAnswer)),s.a.createElement(I.a,{xs:12,md:6,className:"d-flex justify-content-center px-5"},s.a.createElement("button",{onClick:this.handleClick,className:"btn-basic w-100",key:a},t.fourthAnswer))),s.a.createElement(d.a,{className:"ml-4 my-3"},s.a.createElement("button",{className:"btn-basic btn-red btn-small",id:"quit-button",onClick:this.handleQuitButtonClick},"Quit")))))}}]),n}(s.a.Component),z=n(70),S=n(133);var M=function(e){var t=Object(a.useState)(!1),n=Object(z.a)(t,2),r=n[0],o=n[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("p",{onClick:function(){return o(!0)},className:"text-center show-answers"},e.title),s.a.createElement(S.a,{show:r,onHide:function(){return o(!1)},scrollable:!0,className:"modal-answers"},s.a.createElement(S.a.Header,{closeButton:!0},s.a.createElement(S.a.Title,null,"Answers")),s.a.createElement(S.a.Body,null,s.a.createElement("ul",null,e.questions.map((function(e){return s.a.createElement("li",{className:e.isCorrect?"correct-answer":"wrong-answer",key:e.id},s.a.createElement("a",{target:"_blank",href:e.link},e.content)," - ",s.a.createElement("strong",null,e.title))}))))))},T=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).state={score:0,numberOfQuestions:0,numberOfAnswererQuestions:0,correctAnswers:0,wrongAnswers:0,questions:[]},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location.state;this.setState({numberOfQuestions:e.numberOfQuestions,numberOfAnsweredQuestion:e.numberOfAnsweredQuestion,correctAnswer:e.correctAnswer,wrongAnswer:e.wrongAnswer,questions:e.questions})}},{key:"render",value:function(){var e;return e=this.state.questions,s.a.createElement("div",{id:"summary"},s.a.createElement(l.a,null,s.a.createElement("title",null,"Movie Quotes Quiz - Summary")),s.a.createElement(m.a,{fluid:!0},s.a.createElement(d.a,{className:"mx-2 mx-md-5 mb-5 d-flex justify-content-center flex-column"},s.a.createElement("h1",{className:"text-center mx-2 mx-md-5 my-5 font-weight-light"},"You were right in ",s.a.createElement("strong",null,Math.floor(this.state.correctAnswer/this.state.numberOfQuestions*100)," %")," !"),s.a.createElement("p",{className:"summary-info text-center"},"Correct answers: ",s.a.createElement("strong",null,this.state.correctAnswer)),s.a.createElement("p",{className:"summary-info text-center"},"Wrong answers: ",s.a.createElement("strong",null,this.state.wrongAnswer)),s.a.createElement("p",{className:"summary-info text-center"},"Number of answered questions: ",s.a.createElement("strong",null,this.state.numberOfAnsweredQuestion)),s.a.createElement("p",{className:"summary-info text-center"},"Number of questions: ",s.a.createElement("strong",null,this.state.numberOfQuestions)),s.a.createElement(M,{title:"Show answers",questions:e})),s.a.createElement(d.a,{className:"mx-2 mx-md-5 mb-5 d-flex"},s.a.createElement(I.a,{xs:12,md:6,className:"mb-3 mb-md-5 justify-content-center d-flex"},s.a.createElement(i.b,{to:"/",className:"btn-basic m-auto px-5"},"Back to home")),s.a.createElement(I.a,{xs:12,md:6,className:"mb-3 mb-md-5 justify-content-center d-flex"},s.a.createElement(i.b,{to:"quiz",className:"btn-basic m-auto px-5"},"Play again!")))))}}]),n}(s.a.Component),D=(n(109),n(69)),G=n.n(D),L=(n(110),G.a.initializeApp({apiKey:"AIzaSyCkBiJLj3sLletp1rI0VWapyi2O4-dpU5s",authDomain:"movie-quotes-quiz-5bb54.firebaseapp.com",databaseURL:"https://movie-quotes-quiz-5bb54.firebaseio.com",projectId:"movie-quotes-quiz-5bb54",storageBucket:"movie-quotes-quiz-5bb54.appspot.com",messagingSenderId:"626273728775",appId:"1:626273728775:web:10c301063a781dde946da2",measurementId:"G-DZBN3QEX37"}));function H(){return s.a.createElement("div",null,s.a.createElement("div",{className:"logo"},s.a.createElement(u.a,{fontSize:"large"},"movie"),s.a.createElement("strong",null,"Movie Quotes Quiz")))}function W(){return s.a.createElement("div",{id:"footer"},s.a.createElement("p",null,"Designed & created by Karolina Guzik"))}function J(){return L.firestore().collection("quotes").get().then((function(e){return e.docs.map((function(e){return e.data()}))}))}var U=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(H,null),s.a.createElement(i.a,{basename:"/movie-quotes-quiz"},s.a.createElement(c.a,{path:"/",exact:!0,component:f}),s.a.createElement(c.a,{path:"/play/instruction",exact:!0,component:b}),s.a.createElement(c.a,{path:"/play/quiz",exact:!0,render:function(e){return s.a.createElement(B,Object.assign({getQuestions:J},e))}}),s.a.createElement(c.a,{path:"/play/summary",exact:!0,render:function(e){return s.a.createElement(T,Object.assign({getQuestions:J},e))}})),s.a.createElement(W,null))};n(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,n){e.exports=n.p+"static/media/correct-answer.2b87b416.mp3"},58:function(e,t,n){e.exports=n.p+"static/media/wrong-answer.3555354b.mp3"},59:function(e,t,n){e.exports=n.p+"static/media/button-sound.dd7fb344.mp3"},74:function(e,t,n){e.exports=n(115)}},[[74,1,2]]]);
//# sourceMappingURL=main.f4a440d0.chunk.js.map