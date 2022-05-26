import styled from 'styled-components';
import { useState } from 'react';
import FormRegister from '../../components/Forms/FormRegister'
import logo from '../../assets/images/logo.png'

export default function Register() {

  const [form, setForm] = useState({
    email: '',
    password: '',
    name:'',
    foto:''

  });

  return(
    < > 
    
     <Logo src={logo} alt="" />

     <FormRegister form={form} setForm={setForm}/>

     <Button >Cadastrar</Button>

     <TextRegister>Já tem uma conta? Faça login!</TextRegister>

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
`