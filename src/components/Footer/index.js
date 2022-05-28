import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";

export default function FooterPage() {
  const { numPorcent } = useContext(TokenContext);

  return (
    <DivFooter>
      <Link to="/habits" style={{ textDecoration: "none" }}>
        <p>Hábitos</p>
      </Link>
      <div>
        <Link to="/today" style={{ textDecoration: "none" }}>
          <CircularProgressbar
            value={numPorcent}
            text={"Hoje"}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              textSize: "20px",
              strokeWidth: "91px",
            })}
          />
        </Link>
      </div>
      <Link to="/historic" style={{ textDecoration: "none" }}>
        <p>Histórico</p>
      </Link>
    </DivFooter>
  );
}

const DivFooter = styled.div`
  height: 70px;
  width: 100%;
  padding: 0px 36px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  position: fixed;
  bottom: 0px;
  left: 0px;

  p {
    color: #52b6ff;
    font-size: 18px;
  }

  div {
    width: 96px;
    margin-bottom: 48px;
  }
`;
