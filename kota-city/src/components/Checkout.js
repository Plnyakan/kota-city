import React from 'react'
import styled from 'styled-components';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{ basket}, dispatch] = useStateValue();
  return (
    <CheckoutContainer>
    <CheckoutLeft>
    {basket?.length === 0 ? (
        <div>
            <h2>Your shopping Cart is empty</h2>
            <p>
                You have no items in your cart. To
                buy one or more items, click
                "Add to cart" next to the item.
                </p>
        </div>
    ) : (
        <div>
        <CheckoutTitle>Your shopping Cart</CheckoutTitle>
        {/* {basket.map(item => (
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
            />
            ))} */}
        
        </div>
     )}
    </CheckoutLeft>
        {basket ?.length > 0 && (
          <CheckoutRight>
          <Subtotal />
          </CheckoutRight>
                )
               }

            </CheckoutContainer>
  )
}

export default Checkout

const CheckoutContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;

const CheckoutLeft = styled.div`

`;

const CheckoutTitle = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const CheckoutRight = styled.div`

`;