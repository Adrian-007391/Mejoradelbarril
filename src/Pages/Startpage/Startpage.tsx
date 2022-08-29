import React from "react";
import styled from "styled-components";
import Buttontype from "../../Components/Buttontype/Buttontype";
import { BsFillMoonFill } from "react-icons/bs";
import { GiHops, GiWatermelon, GiPalmTree } from "react-icons/gi";
import "./Startpage.css";
function Startpage() {
  const Title = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
  `;
  const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    display flex;
    flex-direction: column;
    align-items:center;
  `;

  return (
    <div>
      <Title>Cervezas</Title>
      <ButtonWrapper>
        <Buttontype icon={<BsFillMoonFill className="icon" />} text="Oscuras" />
        <Buttontype icon={<GiHops className="icon" />} text="Hoppy" />
        <Buttontype icon={<GiWatermelon className="icon" />} text="Frutales" />
        <Buttontype
          icon={<GiPalmTree className="icon" />}
          text="Refrescantes"
        />
      </ButtonWrapper>
    </div>
  );
}
export default Startpage;
