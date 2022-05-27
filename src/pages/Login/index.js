import styled from 'styled-components';
import { useState } from 'react';
import FormLogin from '../../components/Forms/FormLogin'
import logo from '../../assets/images/logo.png'

export default function Login() {

  const [form, setForm] = useState({
    email: '',
    password: '',

  });

  return(
    < > 

     <Logo src={logo} alt="" />

     <FormLogin form={form} setForm={setForm}/>

     <Button >Entrar</Button>

     <TextRegister>Não tem uma conta? Cadastre-se!</TextRegister>

    </>
  )

} 
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
  
  
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :hover {
    filter: brightness(1.1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
}
`