import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startpage from "./Pages/Startpage/Startpage";
import Menu from "./Pages/Menu/Menu";
import About from "./Pages/About/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Startpage />} path="/" />
        <Route element={<About />} path="/Acerca_de" />
        <Route element={<Menu tipo="hoppy" />} path="/cervezas/hoppy" />
        <Route element={<Menu tipo="frutales" />} path="/cervezas/frutales" />
        <Route
          element={<Menu tipo="refrescantes" />}
          path="/cervezas/refrescantes"
        />
        <Route element={<Menu tipo="oscuras" />} path="/cervezas/oscuras" />
      </Routes>
    </Router>
  );
}

export default App;
