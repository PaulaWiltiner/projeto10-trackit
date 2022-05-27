import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react';
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";

export default function Historic() {

  const { token, photo } = useContext(TokenContext);

  return(
    <ContainerHistoric>

      <Header photo={photo} />

      <Title>
        <h2>Histórico</h2>
      </Title>
    
      <Footer />

      <InicialText>
        Em breve você poderá ver 
        o histórico dos seus
        hábitos aqui!
      </InicialText>
      

    </ContainerHistoric>
  )

} 


const ContainerHistoric = styled.div`
  background-color: #f0f0f0;
  width:100%;
  height: 100vh;
  padding:0px 18px;
`

const Title = styled.div`
  color: #126BA5;
  font-size:23px;
  margin-top:100px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const InicialText = styled.p`
  color: #666666;
  font-size: 18px;
  line-height: 22px;
  margin-top:28px;
`