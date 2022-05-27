import styled from 'styled-components';


function Habit(props){
  const listDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  return (
    <DivOverview>
      <ion-icon name="trash-outline"></ion-icon>
      <h2>{props.title}</h2>
      <DivCheckBox>
        {listDays.map((day,index) => 
            
            {
              let colorButton={color: '#DBDBDB', background:'#ffffff'};

              if(props.days.some( e => e===index)){
                colorButton={
                  background:'#DBDBDB',
                  color:'#FFFFFF'
                }
              }
              return(
                <Day
                  key={index}  
                  color={colorButton.color} 
                  background={colorButton.background} >
                  {day}
                </Day>
              )
            }
          )}
         </DivCheckBox>
    </DivOverview>
  )

}


export default function Overview() {


  return(
    <ContainerOverview>
      <Habit 
        title={'Ler 1 capítulo de livro'}
        days={[1,4]}
      />
      <Habit 
        title={'Ler 1 capítulo de livro'}
        days={[1,3]}
      />
    </ContainerOverview>
    
  )

} 

const ContainerOverview = styled.div`
  margin-top:24px;
`

const DivOverview = styled.div`
  background-color: #ffffff;
  width: 340px;
  height: 92px;
  padding:18px 18px 18px 19px;
  margin-top: 10px;
  position:relative;
  border-radius: 5px;
  font-size:20px;
  color:  #666666;
  position:relative;

  ion-icon {
    position: absolute;
    right:10px;
    top: 10px;
    font-size:19px;
  }
`
const DivCheckBox = styled.div`
  margin-top:7px;
  width:230px;
  display:flex;
  justify-content:space-between;
`
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:4px;
  font-size: 19px;
  width: 30px;
  height: 30px;
  background-color: ${props => props.background};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  color:${props => props.color};
`



