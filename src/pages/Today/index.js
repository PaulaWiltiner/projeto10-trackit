import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react';
import Tasks from '../../components/TodayComponents/Tasks';
import dayjs from 'dayjs'
import "dayjs/locale/pt-br";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";


export default function Today() {

  const { token, photo } = useContext(TokenContext);

  const day = dayjs()
          .locale("pt-br")
          .format('dddd , DD/MM')
          .replace('-feira', '')
          
  const dayComplete=day[0].toUpperCase()+day.substring(1)

  return(
    <ContainerToday> 

      <Header photo={photo}/>

      <Title>
        <h2>{dayComplete}</h2>
        <p>Nenhum hábito concluído ainda</p>
      </Title>

      <Tasks />
    
      <Footer />
      

    </ContainerToday>
)
} 

const ContainerToday = styled.div`
  background-color: #f0f0f0;
  width:100%;
  height: 100vh;
  padding:0px 18px;
`

const Title = styled.div`
  margin-top:100px;
  display:flex;
  height:50px;
  flex-direction:column;
  justify-content:space-between;

  h2{
    color: #126BA5;
    font-size:23px;
  }

  p{
    color: #BABABA;
    font-size:18px;
  }

`
