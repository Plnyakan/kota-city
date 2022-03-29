import React , {useState} from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register({setAuth}) {

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  })

  const {email,password,name} = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });} 

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {

      const body = {name, email, password};
      
      const response = await fetch(
        "http://localhost:5000/auth/register",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        const parseRes = await response.json()
        // console.log(parseRes)
        // setAuth(true);

        if (parseRes.token) {
          localStorage.setItem('token', parseRes.token);
          setAuth(true);
          toast.success("Register Successfully");
        } else {
          setAuth(false);
          toast.error(parseRes);
        }

    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <Container>
      <RegisterContainer>
          <Header>Sign Up</Header>
          <form onSubmit={onSubmitForm}>
              <Header5>Username</Header5>
              <RegisterInput 
              name="name" 
              type='text' 
              placeholder='Username'
              onChange={e => onChange(e)}
              value={name} 
              />

              <Header5>E-mail</Header5>
              <RegisterInput  
              name="email"
              type='email' 
              placeholder='Email'
              onChange={e => onChange(e)}
              value={email}
              />

              <Header5>Password</Header5>
              <RegisterInput  
              name="password"
              type='password'
              placeholder='Password' 
              onChange={e => onChange(e)}
              value={password}
              />
              <RegisterButton  type='submit'>Sign Up</RegisterButton>
          </form>
          <RegisterPar>By continuing, you agree to Kota-City's Conditions of Use and Privacy Notice.
          </RegisterPar>
          <Link to='/login'>
          <LoginButton>Sign-in to your Kota-City Account</LoginButton>
          </Link>
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