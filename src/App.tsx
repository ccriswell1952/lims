import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Navigation";
import Home from "./features/home/Home";
import PreLogon from "./features/home/PreLogon";
import FileNotFound from "./features/fileNotFound/FileNotFound";
import LogOut from "./features/logInOut/LogOut";
import LogIn from "./features/logInOut/LogIn";
import UserStore from "./stores/UserStore";
function App() {
  const { userInfo } = UserStore.useState();
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <br></br>
          <Routes>
            <Route
              path="/"
              element={userInfo.isLoggedOn ? <Home /> : <PreLogon />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/logoff" element={<LogOut />} />
            <Route path="/logon" element={<LogIn />} />
            <Route path="*" element={<FileNotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
