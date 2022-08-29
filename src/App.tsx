import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  `;
  return (
    <div>
      <Title>Cervezas</Title>
    </div>
  );
}

export default App;
