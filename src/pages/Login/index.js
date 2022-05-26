import styled from 'styled-components';
import { useState } from 'react';
import FormLogin from '../../components/Forms/FormLogin'
import logo from '../../assets/images/logo.png'

export default function Login() {

  return(
    < > 

     <img src={logo} alt="" />

     <FormLogin/>

     <TextRegister>Não tem uma conta? Cadastre-se!</TextRegister>

    </>
  )

} 

const TextRegister = styled.h2`
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
`