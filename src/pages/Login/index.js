import styled from 'styled-components';
import { useState } from 'react';
import FormLogin from '../../components/Forms/FormLogin'
import logo from '../../assets/images/logo.png'
import { Link }from 'react-router-dom'
import SignIn from '../../data/SignIn'
import SignInContext from "../../contexts/SignInContext";
import { ThreeDots } from "react-loader-spinner";


export default function Login() {

  const [swap,setSwap] = useState(false)

  const [loading,setLoading] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return(
    <SignInContext.Provider
      value={
        {form,
         setForm, 
         swap,
         setSwap, 
         loading,
         setLoading}
      } >
      <DivLogin>
        {
          swap ?
            <SignIn />
            :
            null
        }

        <Logo src={logo} alt="" />

        <FormLogin/>

        <Button onClick={()=> 
          setSwap(true)} disabled={swap} >
            
          {
            swap ?
              <ThreeDots
                color="#ffffff"
                height={40}
                width={80}
                /> 
              :
              'Entrar'
          }
          </Button>

        <Link to='/register' style={{ textDecoration: 'none' }}>
          <TextRegister>
            Não tem uma conta? Cadastre-se!
          </TextRegister>
        </Link>
      </DivLogin>
    </SignInContext.Provider>
  )

} 

const DivLogin = styled.div`
  width:100%;
  height:100vh;
  background-color:#ffffff;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Logo = styled.img`
  width:180px;
  margin-top:70px;
  margin-bottom:33px;
`
const TextRegister = styled.h2`
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52B6FF;
`
const Button = styled.button`
  width: 303px;
  height: 43px;
  margin-bottom:30px;

  color:#ffffff;
  font-size:21px;
  font-weight:400;
  background:#52B6FF;
  display:flex;
  justify-content:center;
  align-items:center;
  
  
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :hover {
    filter: brightness(1.1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
}
`