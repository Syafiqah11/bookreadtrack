// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./Components/BookList";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MyList from "./Components/MyList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/booklist" element={<BookList />} />
          <Route exact path="/mylist" element={<MyList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
