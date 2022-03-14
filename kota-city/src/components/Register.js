import React from 'react'
import styled from 'styled-components';

function Register() {
  return (
    <Container>
      <RegisterContainer>
          <Header>Sign Up</Header>
          <form>
              <Header5>Username</Header5>
              <RegisterInput  type='text'/>
              <Header5>E-mail</Header5>
              <RegisterInput  type='email'/>
              <Header5>Password</Header5>
              <RegisterInput  type='password'/>
              <RegisterButton  type='submit'>Sign Up</RegisterButton>
          </form>
          <RegisterPar>By continuing, you agree to Kota-City's Conditions of Use and Privacy Notice.
          </RegisterPar>
          <LoginButton>Sign-in to your Kota-City Account</LoginButton>
      </RegisterContainer>
    </Container>
  )
}

export default Register


const Header = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
`;

const Header5 = styled.h5`
margin-bottom: 5px;
`;

const RegisterInput = styled.input`
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
`;

const RegisterPar = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;

const RegisterButton = styled.button`
  background: var(--kotacolor);
  color: var(--kotatext);
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
`;

const LoginButton = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const RegisterContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 110px;
  border: 1px solid lightgray;
`;