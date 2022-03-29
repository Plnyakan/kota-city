import React from 'react'
import styled from 'styled-components';
 import {useStateValue } from './StateProvider';

function CheckoutProduct({id,title,url,price}) {

    const [{  }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id:id
        })
    }
  return (
    <CheckoutProductContainer>
    <ProductImage 
         src={url}
        alt=""
    />

    <CheckoutProductInfo>
        <ProductTitle>
            {title}
            </ProductTitle>

        <p>
            <small>R</small>
            <strong>{price}</strong>
        </p>
        <Button onClick={removeFromBasket}>
            Remove from basket
        </Button>

    </CheckoutProductInfo>
    
</CheckoutProductContainer>
  )
}

export default CheckoutProduct


const CheckoutProductContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ProductTitle = styled.p`
    font-size: 17px;
    font-weight: 800;
`;

const ProductImage = styled.div`
    object-fit: contain;
    width: 180px;
    height: 180px;
`;

const CheckoutProductInfo = styled.div`
    padding-left: 20px;
`;

const Button = styled.button`
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
`;