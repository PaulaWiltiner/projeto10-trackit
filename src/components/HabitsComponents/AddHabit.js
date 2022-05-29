import styled from "styled-components";
import { useContext } from "react";
import HabitsContext from "../../contexts/HabitsContext";
import { ThreeDots } from "react-loader-spinner";

export default function AddHabit() {
  const { form, setForm, setAdd, swap, setSwap } = useContext(HabitsContext);

  function selectDay(index) {
    const checkDay = form.days.some((e) => e === index);
    if (checkDay) {
      const listDay = form.days.filter((e) => e !== index);
      setForm({
        ...form,
        days: listDay,
      });
    } else {
      const listDay = [...form.days, index];
      setForm({
        ...form,
        days: listDay,
      });
    }
  }

  function handleForm(e) {
    setForm({
      ...form,
      name: e.target.value,
    });
  }

  const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <>
      <FormAdd>
        <DivInput>
          <input
            type="text"
            placeholder="nome do hábito"
            name="name"
            onChange={handleForm}
            value={form.name}
            disabled={swap}
          />
        </DivInput>

        <DivCheckBox>
          {listDays.map((day, index) => {
            let colorButton = { color: "#DBDBDB", background: "#ffffff" };

            if (form.days.some((e) => e === index)) {
              colorButton = {
                background: "#DBDBDB",
                color: "#FFFFFF",
              };
            }
            return (
              <Button
                key={index}
                color={colorButton.color}
                background={colorButton.background}
                disabled={swap}
                onClick={() => selectDay(index)}
              >
                <p>{day}</p>
              </Button>
            );
          })}
        </DivCheckBox>

        <ListButtons>
          <Cancel onClick={() => setAdd(false)} disabled={swap}>
            Cancelar
          </Cancel>
          <Save onClick={() => setSwap(true)} disabled={swap}>
            {swap ? (
              <ThreeDots color="#ffffff" height={30} width={60} />
            ) : (
              "Salvar"
            )}
          </Save>
        </ListButtons>
      </FormAdd>
    </>
  );
}

const FormAdd = styled.div`
  background-color: #ffffff;
  width: 340px;
  height: 180px;
  padding: 18px 18px 18px 19px;
  margin-top: 20px;
  position: relative;
  border-radius: 5px;
`;

const DivInput = styled.div`
  margin-top: 7px;
  font-weight: 400;
  width: 100%;

  input {
    color: #666666;
    font-size: 20px;
    width: 303px;
    height: 45px;
    padding-left: 10px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  input::-webkit-input-placeholder {
    color: #dbdbdb;
    font-size: 20px;
    font-weight: 400;
  }

  input:disabled {
    color: #afafaf;
    background-color: #f2f2f2;
    font-size: 20px;
    font-weight: 400;
  }
`;

const DivCheckBox = styled.div`
  margin-top: 7px;
  width: 240px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  font-size: 19px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  color: ${(props) => props.color};
`;

const ListButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
  position: absolute;
  right: 18px;
  bottom: 18px;
`;
const Cancel = styled.button`
  background-color: #ffffff;
  font-size: 16px;
  width: 100px;
  height: 35px;
  border: 1px solid #ffffff;
  border-radius: 4.6px;
  color: #52b6ff;

  :hover {
    filter: brightness(1.1);
  }
`;

const Save = styled.button`
  background-color: #52b6ff;
  font-size: 16px;
  width: 100px;
  height: 35px;
  border: 1px solid #52b6ff;
  border-radius: 4.6px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    filter: brightness(1.1);
  }
`;
