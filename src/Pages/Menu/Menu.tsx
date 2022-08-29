import React from "react";
import Item from "../../Components/Item/Item";
import { Container } from "./styles";

import {
  cervezasHoppy,
  cervezasFrutales,
  cervezasOscuras,
  cervezasRefrescantes,
} from "../../Data/cervezas_datos";
import { Cerveza } from "../../Data/cerveza";

function Menu({ tipo }: { tipo: string }) {
  let menuCervezas: Cerveza[];

  switch (tipo) {
    case "hoppy":
      menuCervezas = cervezasHoppy;
      break;
    case "frutales":
      menuCervezas = cervezasFrutales;
      break;
    case "oscuras":
      menuCervezas = cervezasOscuras;
      break;
    case "refrescantes":
      menuCervezas = cervezasRefrescantes;
      break;
    default:
      menuCervezas = [];
      break;
  }

  let menuItems: any = menuCervezas.map((el) => <Item cerveza={el} />);

  return (
    <Container>
      <h1>CERVEZAS {tipo.toLocaleUpperCase()}</h1>
      {menuItems}
    </Container>
  );
}

export default Menu;

