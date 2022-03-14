import React from 'react';
import styled from 'styled-components';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
      <Navbar>

          {/* logo  image png*/}
          <Links to="/">
          <Logo
               src="https://blog.flamingtext.com/blog/2022/03/08/flamingtext_com_1646770150_953484133.png"
          />
          </Links>

          {/* search bar */}
          <Search>
              <SearchInput type="text" placeholder="Search for a category"/>
              <SearchIcons/>
          </Search>



          {/* Linkss */}
        <Headernav>
            <Links to="login">
                <HeaderOptions>
                    <HeaderOne>Sign-In</HeaderOne>
                </HeaderOptions>
          </Links>
          <Links to="/">
          <HeaderOptions>
            <HeaderOne>Menu</HeaderOne>
          </HeaderOptions>
          </Links>
            <Links to="/">
                <HeaderOptions>
                    <HeaderOne>Orders</HeaderOne>
                </HeaderOptions>
          </Links>
          <Links to="/profile">
            <HeaderOptions>
                <HeaderOne>My Profile</HeaderOne>
            </HeaderOptions> 
          </Links>
          
        </Headernav>

          {/* shopping busket */}
          <Links to="checkout">
            <Busket>
                <ShoppingBasketIcon/>
                <BusketCount>0</BusketCount>
            </Busket>
            </Links>

        
      </Navbar>
  )
}

export default Header

const Navbar = styled.nav`
    background-color: var(--kotacolor);
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
`;

const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
`;


const Search = styled.div`
    display: flex;
    flex: 1;
`;

const SearchIcons = styled(SearchIcon)`
    background-color: gray;
    color: var(--kotatext);
    padding: 5px;
    height: 22px !important;
`;

const SearchInput = styled.input`
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
`;


const Busket = styled.div`
    display: flex;
    align-items: center;
    color: var(--kotatext);
`;

const BusketCount = styled.h3`
    margin-left: 10px;
    margin-right: 10px ;
`;

const HeaderOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
`;

const HeaderOne = styled.div`
    color: var(--kotatext);
    font-size: 13px;
    font-weight: 800;
`;

const Headernav = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Links = styled(Link)`
text-decoration: none;
color: black;
`;