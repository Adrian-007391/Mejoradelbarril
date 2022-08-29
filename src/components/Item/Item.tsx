import React from "react";

import { Container, Info, Cost, CostItem, Data, Button } from "./styles";

import { BsSearch } from "react-icons/bs";
import { Cerveza } from "../../Data/cerveza";
import { useNavigate } from "react-router-dom";

function Item({ cerveza }: { cerveza: Cerveza }) {
  const medidas: string[] = ["5 oz", "11oz", "16oz", "Tarro"];
  let navigate = useNavigate();
  return (
    <Container>
      <Data>
        <h6>{cerveza.nombre}</h6>
        <Info>
          <p>{cerveza.estilo}</p>
          <p>ABV {cerveza.ABV}%</p>
          <p>IBU {cerveza.IBU}%</p>
        </Info>
        <Cost>
          {cerveza.precios.map((el: number, i: number) => (
            <CostItem>
              <p>{medidas[i]}</p>
              <span>${el}</span>
            </CostItem>
          ))}
        </Cost>
      </Data>
      <Button onClick={() => navigate(`/Acerca_de/`)}>
        <BsSearch size="40%" style={{ width: "100%" }} />
        <p>Más</p>
      </Button>
    </Container>
  );
}

export default Item;
