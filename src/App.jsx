import { useState, useEffect } from 'react';
import { addCopyRight, generateID, getRandomColor } from '@sarawebs/sb-utils';
import Resume from './components/Resume.jsx';
import './App.css';
let copyRightAdded = false;
function App() {
  useEffect(() => {
    if (copyRightAdded) return;
    copyRightAdded = true;
    addCopyRight({ title: 'SaraCV' });
  }, []);
  return (
    <>
      <Resume />
    </>
  );
}

export default App;
