import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startpage from "./Pages/Startpage/Startpage";
function App() {
  const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  `;
  return (
    <Router>
      <Routes>
        <Route element={<Startpage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
