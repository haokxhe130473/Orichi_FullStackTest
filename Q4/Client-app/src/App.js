// src/App.js
import React from 'react';
import General from './components/General/General';
import { AppProvider } from '@shopify/polaris';
const App = () => {
  return (
    <AppProvider>
    <div>
      <General />
    </div>
  </AppProvider>
  );
};

export default App;
