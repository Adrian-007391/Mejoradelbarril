import React from "react";
import Item from "../Item/Item";
import { Container } from "./styles";


function Menu(){
    return(
        <Container>
        <Item/>
        <Item/>
        <Item/>
        </Container>
    );
}

export default Menu;