import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import TodayContext from "../contexts/TodayContext";
import Tasks from "../components/TodayComponents/Tasks";

export default function SearchHabit() {
  const {
    token,
    statusListHabits,
    setStatusListHabits,
    setListHabitApi,
    text,
    setText,
  } = useContext(TodayContext);

  function ListSet(resp) {
    if (resp.length === 0) {
      setText(
        `Você não tem nenhum 
				hábito para trackear hoje!`
      );
    } else {
      setListHabitApi(resp);
      setStatusListHabits(false);
    }
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then((response) => {
      ListSet(response.data);
    });
  }, []);

  return (
    <>{statusListHabits ? <InicialText>{text}</InicialText> : <Tasks />}</>
  );
}

const InicialText = styled.p`
  color: #666666;
  font-size: 18px;
  line-height: 22px;
  margin-top: 28px;
`;
