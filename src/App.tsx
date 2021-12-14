import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ThemeProvider } from '@mui/styles'
import { BrowserRouter, Route } from 'react-router-dom'
import theme from "./components/navigation/theme"
import Header from "./components/navigation/Navigation"
import ShortCutLegand from './components/shortCutLegand/ShortCutLegand'
function App() {
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <div className="App">
            <header className="App-header">
              <Header />
              <ShortCutLegand />
            </header>
          </div>
      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
