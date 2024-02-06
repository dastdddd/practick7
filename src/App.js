import React from 'react';
import './App.css';
import Header from './components/header';
import Submit from './components/submit/submit';
import List from './components/list/list';
import Comment from './components/comments';

document.body.style.backgroundColor = 'rgb(101, 101, 124)';


const App = () => {


  return (
    <div className='app'>
      <Header/>
      <Submit/>
      <List/>
      <Comment/>
    </div>
  );
};

export default App;