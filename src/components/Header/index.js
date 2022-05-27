import styled from 'styled-components';
import imgtest from '../../assets/images/bobesponja.jpeg'

export default function Header() {

  return(
    <DivHeader>
      <h1>TrackIt</h1>
      <Foto src={imgtest} alt="" />
    </DivHeader>
  )
} 

const DivHeader = styled.div`
  height: 70px;
  width:100%;
  padding: 0px 18px;

  display:flex;
  justify-content:space-between;
  align-items: center;
  background-color: #126BA5;
;
  box-shadow:  0px 2px 4px 2px rgba(0, 0, 0, 0.1);

  position:fixed;
  top:0px;
  font-family: 'Playball', cursive;
  left:0px;

  h1{
    color: #ffffff;
    font-size:39px;
  }

`
const Foto = styled.img`
  width: 51px;
  border-radius: 98.5px;
`