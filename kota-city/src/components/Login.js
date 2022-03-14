import React from 'react'
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <LoginContainer>
          <Header>Sign in</Header>
          <form>
              <Header5>E-mail</Header5>
              <LoginInput  type='email'/>
              <Header5>Password</Header5>
              <LoginInput  type='password'/>
              <LoginButton  type='submit'>Sign In</LoginButton>
          </form>
          <LoginPar>By continuing, you agree to Kota-City's Conditions of Use and Privacy Notice.
          </LoginPar>
          <RegisterButton>Create your Kota-City Account</RegisterButton>
      </LoginContainer>
    </Container>
  )
}

export default Login

const Header = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
`;

const Header5 = styled.h5`
margin-bottom: 5px;
`;

const LoginInput = styled.input`
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
`;

const LoginPar = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;

const LoginButton = styled.button`
  background: var(--kotacolor);
  color: var(--kotatext);
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
`;

const RegisterButton = styled.button`
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


const LoginContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  padding: 20px;
  border: 1px solid lightgray;
`;