import styled from 'styled-components';
import { useContext } from "react";
import SignUpContext from "../../contexts/SignUpContext";


export default function FormRegister() {

  const { form, setForm , swap} = useContext(SignUpContext);

  function handleForm (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }) 

  }


  return(
    <DivForm>
      <DivInput>
        <Input 
          type="email" 
          placeholder='email' 
          name="email" 
          onChange={handleForm} 
          value={form.email}
          disabled={swap}
          autoComplete='off'
        />
      </DivInput>
      <DivInput>
        <Input 
          placeholder='senha'
          type="password" 
          name="password" 
          onChange={handleForm} 
          value={form.password}
          disabled={swap}
          autoComplete='off'
        />
      </DivInput>
      <DivInput>
        <Input 
          placeholder='nome'
          type="text" 
          name="name" 
          onChange={handleForm} 
          value={form.name}
          disabled={swap}
          autoComplete='off'
        />
      </DivInput>
      <DivInput>
        <Input 
          placeholder='foto'
          type="text" 
          name="image" 
          onChange={handleForm} 
          value={form.image}
          disabled={swap}
          autoComplete='off'
        />
      </DivInput>
    </DivForm>
  )
} 

const DivForm = styled.div`
  margin: 8px 0px;
`

const DivInput = styled.div`
  margin-top:7px;
  font-weight: 400;
  width:100%;

`

const Input = styled.input`
  color: #666666;
  font-size: 18px;
  width: 303px;
  height: 45px;
  padding-left:10px;
  background-color: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;

  ::-webkit-input-placeholder {
    color: #DBDBDB;
    font-size: 20px;
    font-weight: 400;
  }

  :disabled {
    color:#AFAFAF;
    background-color: #F2F2F2;
    font-size: 20px;
    font-weight: 400;
  }
`