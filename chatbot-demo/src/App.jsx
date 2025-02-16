import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css';
import defaultDataset from './dataset';
import {AnswersList, Chats} from './components';
import FormDaialog from './components/Forms/FormDialog';

const App  = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState(["init"]);
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState([false]);

   const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: `question`
    })
      setAnswers(nextDataset.answers)
      setCurrentId(nextQuestionId)
  }

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true){
      case(nextQuestionId === 'contact'):
        handleClickOpen();
        break;
      case(/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      default:  
        addChats( {
          text: selectedAnswer,
          type: 'answer'
        })
        setTimeout(() => displayNextQuestion(nextQuestionId,dataset[nextQuestionId]), 1000);
        break;
    }
  }

  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  }

  const handleClickOpen = () => {
      setOpen(true)
  };

  const handleClose = useCallback( () => {
      setOpen(false)
  }, [setOpen]);

  useEffect( () => {
    
    setDataset(initDataset)
    displayNextQuestion(currentId, initDataset[currentId])
  }, [] )

  useEffect( () =>{
    const scrollArea = document.getElementById('scroll-area');
    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollheight
    }
  })

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats}/>
        <AnswersList answers={answers} select={selectAnswer}/>
        <FormDaialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
}

export default App;
