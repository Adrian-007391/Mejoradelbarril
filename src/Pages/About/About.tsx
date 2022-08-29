import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function About() {
  let navigate = useNavigate();
  const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-align: center;
  `;
  const Title2 = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-align: center;
  `;
  const Image = styled.div`
    width: 50vw;
    height: 50vw;
    background-color: #397758;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 100%;
  `;
  const Wrapper = styled.div`

    display:flex;
    width= 80vw;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    height:50 vh;


  `;
  const Text = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-left: 5vw;
    margin-right: 5vw;
  `;
  return (
    <div>
      <Title>Nombre de la cerveza</Title>
      <Wrapper>
        <Image>imagen</Image>
        <Title2>Descripcion</Title2>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </Wrapper>
    </div>
  );
}
export default About;
