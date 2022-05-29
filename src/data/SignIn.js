import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import SignInContext from "../contexts/SignInContext";
import TokenContext from "../contexts/TokenContext";

export default function SignIn() {
  const [alert, setAlert] = useState(false);

  const navigate = useNavigate();

  const { form, setForm, setSwap } = useContext(SignInContext);
  const { setToken, setPhoto } = useContext(TokenContext);

  const data = form;

  useEffect(() => {
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      data
    );

    promise.then((response) => {
      setForm({
        email: "",
        password: "",
      });
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      setPhoto(response.data.image);
      navigate("/habits");
    });

    promise.catch(() => setAlert(true));
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
                <p>Usuário não encontrado, por favor , tente novamente</p>
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
