import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import HabitsContext from "../contexts/HabitsContext";
import Overview from "../components/HabitsComponents/Overview";
import TokenContext from "../contexts/TokenContext";

export default function ListHabit() {
  const { token, setNumPorcent } = useContext(TokenContext);

  const {
    statusListHabits,
    setStatusListHabits,
    setListHabitApi,
    text,
    setText,
  } = useContext(HabitsContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function Calculation(listTodayApi) {
    if (listTodayApi.length !== 0) {
      const listDone = listTodayApi.filter((elem) => elem.done === true);
      const num = listDone.length / listTodayApi.length;
      const count = (num / 100) * 10000;
      setNumPorcent(count);
    } else {
      setNumPorcent(0);
    }
  }

  function ListSet(resp) {
    if (resp.length === 0) {
      setText(
        `Você não tem nenhum 
				hábito cadastrado ainda. 
				Adicione um hábito para 
				começar a trackear!`
      );
    } else {
      setListHabitApi(resp);
      setStatusListHabits(false);
    }
  }

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    promise.then((response) => {
      ListSet(response.data);
      const resp = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        config
      );

      resp.then((response) => {
        Calculation(response.data);
      });
    });
  }, []);

  return (
    <>{statusListHabits ? <InicialText>{text}</InicialText> : <Overview />}</>
  );
}

const InicialText = styled.p`
  color: #666666;
  font-size: 18px;
  line-height: 22px;
  margin-top: 28px;
`;
