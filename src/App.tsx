import './App.css';
import { MantineProvider, Slider } from '@mantine/core'
import '@mantine/core/styles.css';
import React, { useRef } from 'react';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <MantineProvider>
      <HomePage/>
      
    </MantineProvider>
  );
}

export default App;
