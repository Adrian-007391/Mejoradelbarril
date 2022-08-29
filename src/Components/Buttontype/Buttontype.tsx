import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";
type Prop = {
  text: string;
  icon: any;
};
function Buttontype(props: Prop) {
  const Wrapper = styled.div`
    width: 20vh;
    height: 20vh;
    background-color: #397758;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    margin: 10px;
  `;
  const Text = styled.p`
    font-size: 20px;
    text-align: center;
    color: white;
  `;
  return (
    <Wrapper>
      {props.icon} <Text>{props.text}</Text>
    </Wrapper>
  );
}
export default Buttontype;
