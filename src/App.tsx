import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Navigation";
import Home from "./features/home/Home";
import LogInOut from "./features/logInOut/LogInOut";
import FileNotFound from "./features/fileNotFound/FileNotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <br></br>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/logoff" element={<LogInOut />} />
            <Route path="/logon" element={<LogInOut />} />
            <Route path="*" element={<FileNotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
