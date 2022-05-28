import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddHabit from "../../components/HabitsComponents/AddHabit";
import { useState } from "react";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import HabitsContext from "../../contexts/HabitsContext";
import ListHabits from "../../data/ListHabits";
import CreateHabit from "../../data/CreateHabit";

export default function Habits() {
  const { token, photo } = useContext(TokenContext);

  const [text, setText] = useState("");

  const [add, setAdd] = useState(false);

  const [swap, setSwap] = useState(false);

  const [listHabitApi, setListHabitApi] = useState([]);

  const [statusListHabits, setStatusListHabits] = useState(true);

  const [form, setForm] = useState({
    name: "",
    days: [],
  });

  return (
    <HabitsContext.Provider
      value={{
        token,
        form,
        setForm,
        swap,
        setSwap,
        add,
        setAdd,
        statusListHabits,
        setStatusListHabits,
        listHabitApi,
        setListHabitApi,
        text,
        setText,
      }}
    >
      {swap ? <CreateHabit /> : null}

      <DivHabits>
        <Header photo={photo} />

        <Title>
          <h2>Meus hábitos</h2>
          <AddButton
            onClick={() => {
              setAdd(true);
              setSwap(false);
            }}
          >
            +
          </AddButton>
        </Title>
        {add ? <AddHabit /> : null}

        <ListHabits />

        <Footer />
      </DivHabits>
    </HabitsContext.Provider>
  );
}

const DivHabits = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 18px 100px 18px;
`;

const Title = styled.div`
  color: #126ba5;
  font-size: 23px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.div`
  background-color: #52b6ff;
  font-size: 27px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border-radius: 4.6px;
  color: #ffffff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);

  :hover {
    filter: brightness(1.1);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
  }
`;
