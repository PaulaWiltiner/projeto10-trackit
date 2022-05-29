import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Historic() {
  const { token, photo, setNumPorcent } = useContext(TokenContext);

  const [swap, setSwap] = useState(true);

  const [alert, setAlert] = useState(false);

  const [colorDiv, setColorDiv] = useState("#E75766");

  const [colorButton, setColorButton] = useState("#E75766");

  const [alertText, setAlertText] = useState({ title: "", text: "" });

  const [listDay, setListDay] = useState([]);

  const [text, setText] = useState(" ");

  function Calculation(listHabitApi) {
    const listDone = listHabitApi.filter((elem) => elem.done === true);
    const num = listDone.length / listHabitApi.length;
    const count = (num / 100) * 10000;
    setNumPorcent(count);
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
      config
    );

    promise.then((response) => {
      const resp = axios.get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        config
      );

      resp.then((response) => {
        Calculation(response.data);
      });
      if (response.data.length !== 0) {
        setListDay(response.data);
        setSwap(false);
      } else {
        setText("Em breve você poderá ver o histórico dos seus hábitos aqui!");
      }
    });
  }, []);

  function Back() {
    setAlert(false);
  }

  return (
    <>
      {alert ? (
        <>
          <DivOpacity />
          <Alert>
            <DivAlert colorDiv={colorDiv}>
              <div>
                <p>
                  {alertText.title}:{alertText.text}
                </p>
                <Button colorButton={colorButton} onClick={() => Back()}>
                  ok
                </Button>
              </div>
            </DivAlert>
          </Alert>
        </>
      ) : null}
      <ContainerHistoric>
        <Header photo={photo} />

        <Title>
          <h2>Histórico</h2>
        </Title>

        <Footer />

        {swap ? (
          <InicialText>{text}</InicialText>
        ) : (
          <Calendar
            calendarType="US"
            className="calendar"
            onClickDay={(value, event) => {
              const list = listDay.filter(
                (elem) =>
                  `${dayjs(elem.habits[0].date).format("DD/MM")}/22` ===
                  dayjs(value).format("DD/MM/YY")
              );
              if (list.length !== 0) {
                if (list[0].habits.some((elem) => elem.done === false)) {
                  const listFilterAlert = list[0].habits.filter(
                    (elem) => elem.done === false
                  );
                  const listAlert = listFilterAlert.map((elem) => elem.name);
                  let text = " ";
                  for (let i = 0; i < listAlert.length; i++) {
                    text += listAlert[i] + "; ";
                  }
                  setAlert(true);
                  setAlertText({
                    title: "Hábitos não concluídos",
                    text: text,
                  });
                } else {
                  const listAlert = list[0].habits.map((elem) => elem.name);
                  setColorDiv("#8FC549");
                  setColorButton("#8FC549");
                  let text = " ";
                  for (let i = 0; i < listAlert.length; i++) {
                    text += listAlert[i] + "; ";
                  }
                  setAlert(true);
                  setAlertText({
                    title: "Hábitos concluídos",
                    text: text,
                  });
                }
              }
            }}
            locale="pt-br"
            tileClassName={({ date, view }) => {
              const list = listDay.filter(
                (elem) =>
                  `${dayjs(elem.habits[0].date).format("DD/MM")}/22` ===
                  dayjs(date).format("DD/MM/YY")
              );
              if (list.length !== 0) {
                if (list[0].habits.some((elem) => elem.done === false)) {
                  return "red";
                } else {
                  return "green";
                }
              }
            }}
          />
        )}
      </ContainerHistoric>
    </>
  );
}

const ContainerHistoric = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 18px 100px 18px;
`;

const Title = styled.div`
  color: #126ba5;
  font-size: 23px;
  margin-top: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InicialText = styled.p`
  color: #666666;
  font-size: 18px;
  line-height: 22px;
  margin-top: 28px;
`;

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
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivAlert = styled.div`
  width: 200px;
  height: 40vmin;
  padding: 8px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4.6px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 190px;
    height: 34vmin;
    padding: 13px;
    border: 1px solid ${(props) => props.colorDiv};
    border-radius: 4.6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
      margin-top: 10px;
      text-align: center;
      color: #666666;
      font-size: 13px;
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
  color: ${(props) => props.colorButton};

  :hover {
    filter: brightness(1.1);
  }
`;
