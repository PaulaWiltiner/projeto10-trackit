import styled from 'styled-components';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AddHabit from '../../components/HabitsComponents/AddHabit'
import Overview from '../../components/HabitsComponents/Overview'
import { useState } from 'react';
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";

export default function Habits() {

  const { token, photo } = useContext(TokenContext);

  const [swap, setSwap] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    days: [],

  });

  return(
    <DivHabits> 

      <Header photo={photo} />

      <Title>
        <h2>Meus hábitos</h2>
        <AddButton>+</AddButton>
      </Title>
      { 
        swap ?
        <AddHabit 
          form={form} 
          setForm={setForm} 
        />
         :
        <Overview />
      }

      { 
        swap ?
        <InicialText>
          Você não tem nenhum 
          hábito cadastrado ainda. 
          Adicione um hábito para 
          começar a trackear!
        </InicialText>
         :
        null
      }
    
      <Footer />
      

    </DivHabits>
  )

} 

const DivHabits = styled.div`
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

const AddButton = styled.div`
  background-color: #52B6FF;
  font-size: 27px;
  width: 40px;
  display:flex;
  justify-content:center;
  align-items:center;
  height: 35px;
  border-radius: 4.6px;
  color: #ffffff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);

  :hover {
    filter: brightness(1.1);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
}
`

const InicialText = styled.p`
  color: #666666;
  font-size: 18px;
  line-height: 22px;
  margin-top:28px;
`