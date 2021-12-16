import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Navigation"
import ShortCutLegand from './components/shortCutLegand/ShortCutLegand'
import Home from './features/Home/Home';
import FileNotFound from './features/fileNotFound/FileNotFound'
function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Header />
        <ShortCutLegand />


        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/counter' element={<Counter />}/>
          <Route path="*" element={ <FileNotFound /> } />
        </Routes>
      </header>
    </div>
  </Router>
  );
}

export default App;
