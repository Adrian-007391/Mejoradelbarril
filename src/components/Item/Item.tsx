import React from "react";

import {Container, Info, Cost, CostItem, Data, Button} from "./styles";

function Item() {
    return(
        <Container>
            <Data>
                <h6>Title</h6>
                <Info>
                <p>Estilo</p>
                <p>ABV</p>
                <p>IBU</p>
                </Info>
                <Cost>
                    <CostItem>
                        <p>5 oz</p>
                        <span>$30</span>
                    </CostItem>
                    <CostItem>
                        <p>5 oz</p>
                        <span>$30</span>
                    </CostItem>
                    <CostItem>
                        <p>5 oz</p>
                        <span>$30</span>
                    </CostItem>
                    <CostItem>
                        <p>5 oz</p>
                        <span>$30</span>
                    </CostItem>
                </Cost>
            </Data>
            <Button>
                <img/>
                <p>Conoce más</p>
            </Button>
        </Container>
    )
}

export default Item;