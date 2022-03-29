import React , {useState} from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Login({ setAuth }) {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    
  const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { email, password };
        const response = await fetch(
          "http://localhost:5000/auth/login",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(body)
          }
        );
  
        const parseRes = await response.json();
      
  
        if (parseRes.token) {
          localStorage.setItem('token', parseRes.token);
          setAuth(true);
          toast.success("Logged in Successfully");
        } else {
          setAuth(false);
          toast.error(parseRes);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

  
  return (
    <Container>
      <LoginContainer>
          <Header>Sign in</Header>
          <form onSubmit={onSubmitForm}>
              <Header5>E-mail</Header5>
              <LoginInput 
              name = "email"
              type='email' 
              placeholder='Email' 
              value={email}
              onChange={e => onChange(e)}
              />
               <Header5>Password</Header5>
              <LoginInput
               name = "password"  
               type='password' 
               placeholder='Password'
               value={password}
               onChange={e => onChange(e)}
               />
              <LoginButton  type='submit'>Sign In</LoginButton>
          </form>
          <LoginPar>By continuing, you agree to Kota-City's Conditions of Use and Privacy Notice.
          </LoginPar>
          <Link to='/register'>
          <RegisterButton>Create your Kota-City Account</RegisterButton>
          </Link>
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