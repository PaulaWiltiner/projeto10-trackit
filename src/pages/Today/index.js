import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import SearchHabit from "../../data/SearchHabit";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import TodayContext from "../../contexts/TodayContext";

export default function Today() {
  const { token, photo, setNumPorcent } = useContext(TokenContext);

  const day = dayjs()
    .locale("pt-br")
    .format("dddd , DD/MM")
    .replace("-feira", "");

  const dayComplete = day[0].toUpperCase() + day.substring(1);

  const [text, setText] = useState("");

  const [swap, setSwap] = useState(false);

  const [listHabitApi, setListHabitApi] = useState([]);

  const [NumDone, setNumDone] = useState(0);

  const [statusListHabits, setStatusListHabits] = useState(true);

  return (
    <TodayContext.Provider
      value={{
        token,
        swap,
        setSwap,
        statusListHabits,
        setStatusListHabits,
        listHabitApi,
        setListHabitApi,
        text,
        setText,
        setNumDone,
        setNumPorcent,
      }}
    >
      <ContainerToday>
        <Header photo={photo} />

        <Title>
          <h2>{dayComplete}</h2>
          {NumDone === 0 ? (
            <p>Nenhum hábito concluído ainda</p>
          ) : (
            <Porcent>{Math.round(NumDone)} % dos hábitos concluídos</Porcent>
          )}
        </Title>

        <SearchHabit />

        <Footer />
      </ContainerToday>
    </TodayContext.Provider>
  );
}

const ContainerToday = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 18px 100px 18px;
`;

const Title = styled.div`
  margin-top: 100px;
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: #126ba5;
    font-size: 23px;
  }

  p {
    color: #bababa;
    font-size: 18px;
  }
`;

const Porcent = styled.div`
  color: #8fc549;
  font-size: 18px;
`;
