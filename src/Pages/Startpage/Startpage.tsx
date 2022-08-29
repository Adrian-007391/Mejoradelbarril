import React from "react";
import styled from "styled-components";
import Buttontype from "../../Components/Buttontype/Buttontype";
import { BsFillMoonFill } from "react-icons/bs";
import { GiHops, GiWatermelon, GiPalmTree } from "react-icons/gi";
import { Link } from "react-router-dom";
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
    display: flex;
    flex-direction: column;
    align-items:center;

    a{
      text-decoration: none;
    }
  `;

  return (
    <div>
      <Title>Cervezas</Title>
      <ButtonWrapper>
        <Link to="/cervezas/oscuras">
          <Buttontype icon={<BsFillMoonFill className="icon" />} text="Oscuras" />
        </Link>
        <Link to="/cervezas/hoppy">
          <Buttontype icon={<GiHops className="icon" />} text="Hoppy" />
        </Link>
        <Link to="/cervezas/frutales">
          <Buttontype icon={<GiWatermelon className="icon" />} text="Frutales" />
        </Link>
        <Link to="cervezas/refrescantes">
          <Buttontype
            icon={<GiPalmTree className="icon" />}
            text="Refrescantes"
          />
        </Link>
      </ButtonWrapper>
    </div>
  );
}
export default Startpage;
