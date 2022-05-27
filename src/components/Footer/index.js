import styled from 'styled-components';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function FooterPage() {



  return(
    <DivFooter>
        <p>Hábitos</p>
        <div>
          <CircularProgressbar
            value={66}
            text={'Hoje'}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              textSize: '20px',
              strokeWidth:'91px'
            })}
          />
        </div>
        <p>Histórico</p>
    </DivFooter>
  )

} 


const DivFooter = styled.div`

  height: 70px;
  width:100%;
  padding: 0px 36px;

  display:flex;
  justify-content:space-between;
  align-items: center;

  background-color: #ffffff;
  box-shadow:  0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  position:fixed;
  bottom:0px;
  left:0px;

  p{
    color: #52B6FF;
    font-size: 18px;
  }

  div {
    width:96px;
    margin-bottom: 48px;
  }

`;