import styled from "styled-components";
import check from "../../assets/images/check.png";
import { useContext, useEffect } from "react";
import TodayContext from "../../contexts/TodayContext";
import axios from "axios";

export default function Tasks() {
  const { listHabitApi, setListHabitApi, setNumDone, setNumPorcent } =
    useContext(TodayContext);
  const { token } = useContext(TodayContext);

  function Calculation(listHabitApi) {
    const listDone = listHabitApi.filter((elem) => elem.done === true);
    const num = listDone.length / listHabitApi.length;
    const count = (num / 100) * 10000;
    setNumDone(count);
    setNumPorcent(count);
  }

  useEffect(() => {
    Calculation(listHabitApi);
  }, []);

  function SelectHabit(done, setListHabitApi, idHabito) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/uncheck`,
        null,
        config
      );

      promise.then(() => {
        const resp = axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
          config
        );

        resp.then((response) => {
          setListHabitApi(response.data);
          Calculation(response.data);
        });
      });
    } else {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/check`,
        null,
        config
      );

      promise.then(() => {
        const resp = axios.get(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
          config
        );

        resp.then((response) => {
          setListHabitApi(response.data);
          Calculation(response.data);
        });
      });
    }
  }

  function Task(props) {
    return (
      <DivTask key={props.id} done={props.done}>
        <TextTask>
          <h2>{props.title}</h2>
          <div>
            <DivText>
              {" "}
              <FristText>Sequência atual:</FristText>
              <Current colorCurrent={props.colorCurrent}>
                {props.currentSequence} dias{" "}
              </Current>
            </DivText>
            <DivText>
              {" "}
              <FristText>Seu recorde:</FristText>
              <Highest colorHighest={props.colorHighest}>
                {" "}
                {props.highestSequence} dias{" "}
              </Highest>
            </DivText>
          </div>
        </TextTask>
        <Check
          onClick={() =>
            SelectHabit(props.done, props.setListHabitApi, props.id)
          }
          color={props.color}
        >
          <img src={check} alt="" />
        </Check>
      </DivTask>
    );
  }

  return (
    <ContainerTasks>
      {listHabitApi.map((elem, index) => {
        const { currentSequence, highestSequence, done } = elem;
        let color = "#EBEBEB";
        let colorCurrent = "#666666";
        let colorHighest = "#666666";
        if (done) {
          color = "#8FC549";
          colorCurrent = "#8FC549";
          if (currentSequence === highestSequence) {
            colorHighest = "#8FC549";
          }
        }
        return (
          <Task
            kay={elem.id}
            title={elem.name}
            id={elem.id}
            currentSequence={currentSequence}
            highestSequence={highestSequence}
            done={done}
            color={color}
            setListHabitApi={setListHabitApi}
            colorCurrent={colorCurrent}
            colorHighest={colorHighest}
          />
        );
      })}
    </ContainerTasks>
  );
}

const ContainerTasks = styled.div`
  margin-top: 30px;
`;

const DivTask = styled.div`
  background-color: #ffffff;
  width: 340px;
  height: 94px;
  padding: 18px 16px 18px 18px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`;

const TextTask = styled.div`
  h2 {
    font-size: 19px;
    color: #666666;
  }

  div {
    margin-top: 8px;
  }
`;

const DivText = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
`;

const FristText = styled.div`
  font-size: 14px;
  color: #666666;
  display: flex;
  align-items: center;
`;

const Current = styled.div`
  font-size: 14px;
  padding-left: 5px;
  color: ${(props) => props.colorCurrent};
  display: flex;
  align-items: center;
`;

const Highest = styled.div`
  font-size: 14px;
  padding-left: 5px;
  color: ${(props) => props.colorHighest};
  display: flex;
  align-items: center;
`;

const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69px;
  height: 69px;

  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 5px;
`;
