import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import HabitsContext from "../../contexts/HabitsContext";
import TokenContext from "../../contexts/TokenContext";

export default function Overview() {
  const { listHabitApi, setListHabitApi, setStatusListHabits, setText } =
    useContext(HabitsContext);

  const { setNumPorcent } = useContext(TokenContext);

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

  function Habit(props) {
    const { token } = useContext(HabitsContext);

    function DeleteHabit(
      idHabito,
      setListHabitApi,
      setStatusListHabits,
      setText
    ) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`,
        config
      );

      promise.then(() => {
        const listHabitApi = axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
          config
        );

        listHabitApi.then((response) => {
          setListHabitApi(response.data);
          if (response.data.length === 0) {
            setStatusListHabits(true);
            setText(
              `Você não tem nenhum 
                hábito cadastrado ainda. 
                Adicione um hábito para 
                começar a trackear!`
            );
          }
          const resp = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
            config
          );

          resp.then((response) => {
            Calculation(response.data);
          });
        });
      });
    }

    const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    return (
      <DivOverview>
        <ion-icon
          onClick={() =>
            DeleteHabit(
              props.id,
              props.setListHabitApi,
              props.setStatusListHabits,
              props.setText
            )
          }
          name="trash-outline"
        ></ion-icon>
        <h2>{props.title}</h2>
        <DivCheckBox>
          {listDays.map((day, index) => {
            let colorButton = { color: "#DBDBDB", background: "#ffffff" };

            if (props.days.some((e) => e === index)) {
              colorButton = {
                background: "#DBDBDB",
                color: "#FFFFFF",
              };
            }
            return (
              <Day
                key={index}
                color={colorButton.color}
                background={colorButton.background}
              >
                {day}
              </Day>
            );
          })}
        </DivCheckBox>
      </DivOverview>
    );
  }

  return (
    <ContainerOverview>
      {listHabitApi.map((item) => (
        <Habit
          key={item.id}
          title={item.name}
          days={item.days}
          id={item.id}
          setListHabitApi={setListHabitApi}
          setStatusListHabits={setStatusListHabits}
          setText={setText}
        />
      ))}
    </ContainerOverview>
  );
}

const ContainerOverview = styled.div`
  margin-top: 24px;
`;

const DivOverview = styled.div`
  background-color: #ffffff;
  width: 340px;
  height: 92px;
  padding: 18px 18px 18px 19px;
  margin-top: 10px;
  position: relative;
  border-radius: 5px;
  font-size: 20px;
  color: #666666;
  position: relative;

  ion-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 19px;
  }
`;
const DivCheckBox = styled.div`
  margin-top: 7px;
  width: 230px;
  display: flex;
  justify-content: space-between;
`;
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  font-size: 19px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.background};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: ${(props) => props.color};
`;
