// src/App.js
import React from 'react';
import General from './components/General/General';
import { AppProvider } from '@shopify/polaris';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div className='Container'>
      <AppProvider >
          <div className='General'>
            <General />
          </div>
      </AppProvider>
  </div>
  );
};

export default App;
