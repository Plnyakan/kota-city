import React from 'react'
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
// import {useStateValue} from './StateProvider';
// import { getBasketTotal } from './reducer';

function Subtotal() {
    // const [{ basket }, dispatch] = useStateValue();
  return (
    <SubtotalContainer>
    <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    {/* Subtotal ({basket.length} items) : */}
                    <strong>
                        {value}
                    </strong>
                </p>
                <SubTotalGift>
                    <SubTotalInput type="checkbox" />
                    This order contains a gift.
            </SubTotalGift>
            </>
        )}
        decimalScale={2}
     //   value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
    />
        <Button>Proceed to checkout</Button>
    </SubtotalContainer>
  )
}

export default Subtotal

const SubtotalContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border:1px solid #ddd;
    border-radius: 3px;
`;

const SubTotalInput = styled.input`
    margin-right: 5px;
`
const SubTotalGift = styled.small`
    display:flex;
    align-items: center;
`

const Button = styled.button`
    background: #f0c14b;
    border:1px solid;
    margin-top: 10px;
    border-color:#a88734 #9c7e31 #846a29;
    color:#111;
    border-radius: 2px;
    width: 100%;
    height: 30px;
`;