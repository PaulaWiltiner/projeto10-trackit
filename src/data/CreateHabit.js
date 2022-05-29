import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import HabitsContext from "../contexts/HabitsContext";
import TokenContext from "../contexts/TokenContext";

export default function CreateHabit() {
  const { setNumPorcent } = useContext(TokenContext);
  const {
    token,
    form,
    setForm,
    setSwap,
    setAdd,
    setStatusListHabits,
    listHabitApi,
    setListHabitApi,
  } = useContext(HabitsContext);

  const [alert, setAlert] = useState(false);

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

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = form;

  useEffect(() => {
    if (form.days.length !== 0) {
      const promise = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        data,
        config
      );

      promise.then((response) => {
        setForm({
          name: "",
          days: [],
        });
        setAdd(false);
        setStatusListHabits(false);
        setListHabitApi([...listHabitApi, response.data]);
        const resp = axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
          config
        );

        resp.then((response) => {
          Calculation(response.data);
        });
      });
      promise.catch(() => {
        setAlert(true);
      });
    } else {
      setAlert(true);
    }
  }, []);

  function Back() {
    setAlert(false);
    setSwap(false);
  }

  return (
    <>
      {alert ? (
        <>
          <DivOpacity />
          <Alert>
            <DivAlert>
              <div>
                <p>
                  Não foi possível criar o hábito, por favor , tente novamente
                </p>
                <Button onClick={() => Back()}>ok</Button>
              </div>
            </DivAlert>
          </Alert>
        </>
      ) : null}
    </>
  );
}

const DivOpacity = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  opacity: 0.4;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
`;

const Alert = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivAlert = styled.div`
  width: 200px;
  height: 150px;
  padding: 8px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4.6px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 190px;
    height: 130px;
    padding: 13px;
    border: 1px solid #e75766;
    border-radius: 4.6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
      margin-top: 10px;
      text-align: center;
      color: #666666;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

const Button = styled.button`
  background-color: #ffffff;
  font-size: 18px;
  width: 50px;
  height: 20px;
  border: 1px solid #ffffff;
  border-radius: 4.6px;
  color: #e75766;

  :hover {
    filter: brightness(1.1);
  }
`;
