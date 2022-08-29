import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startpage from "./Pages/Startpage/Startpage";
import Menu from "./Components/Menu/Menu";
function App() {
  const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  `;
  return (
    <Router>
      <Routes>
        <Route element={<Startpage />} path="/" />
        <Route element={<Menu tipo="hoppy"/>} path="/cervezas/hoppy"/>
        <Route element={<Menu tipo="frutales"/>} path="/cervezas/frutales"/>
        <Route element={<Menu tipo="refrescantes"/>} path="/cervezas/refrescantes"/>
        <Route element={<Menu tipo="oscuras"/>} path="/cervezas/oscuras"/>
      </Routes>
    </Router>
  );
}

export default App;
