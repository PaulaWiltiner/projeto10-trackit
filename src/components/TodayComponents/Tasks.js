import styled from 'styled-components';
import check from '../../assets/images/check.png'

function Task(props) {
  return(
    <DivTask>
      <TextTask>
        <h2>{props.title}</h2>
        <div>
          <p> Sequência atual: {props.currentSequence} dias </p>
          <p> Seu recorde: {props.yourRecord} dias </p>
        </div>
      </TextTask>
      <Check
        color={props.color}
      >
        <img src={check} alt='' />
      </Check>
    </DivTask>
    
  )
}


export default function Tasks() {
  
  

  return(
    <ContainerTasks>
      <Task
        title={'Ler 1 capítulo de livro'}
        currentSequence={3}
        yourRecord={5} 
        color='#8FC549'
       />
    </ContainerTasks>
  )

} 


const ContainerTasks = styled.div`
  margin-top:30px;
`

const DivTask = styled.div`
  background-color: #ffffff;
  width: 340px;
  height: 94px;
  padding:18px 16px 18px 18px;
  margin-top: 10px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-radius: 5px;
`

const TextTask = styled.div`
  h2{
    font-size:19px;
    color:  #666666;
  }

  div {
    margin-top:8px;
  }

  p{
    font-size:13px;
    color:  #666666;
    line-height:16px;
  }
`

const Check = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 69px;
  height: 69px;
  
  background-color:${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 5px;
`