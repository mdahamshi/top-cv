import { useState, useEffect } from 'react';
import { addCopyRight, generateID, getRandomColor } from '@sarawebs/sb-utils';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  useEffect(() => {
    addCopyRight({title:'SaraCV'});
  }, []);
  return (
    <>
      <Resume />
    </>
  );
}

export default App;
