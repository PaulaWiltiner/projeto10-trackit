import styled from 'styled-components';


export default function FormRegister({form,setForm}) {
  function handleForm (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }) 

  }


  return(
    <DivForm>
      <DivInput>
        <input 
          type="email" 
          placeholder='email' 
          name="email" 
          onChange={handleForm} 
          value={form.email}
        />
      </DivInput>
      <DivInput>
        <input 
          placeholder='senha'
          type="password" 
          name="password" 
          onChange={handleForm} 
          value={form.password}
        />
      </DivInput>
      <DivInput>
        <input 
          placeholder='nome'
          type="name" 
          name="name" 
          onChange={handleForm} 
          value={form.name}
        />
      </DivInput>
      <DivInput>
        <input 
          placeholder='foto'
          type="photo" 
          name="photo" 
          onChange={handleForm} 
          value={form.photo}
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
  color:#293845;
  font-size: 20px;
  font-weight: 400;
  width:100%;

  input {
    width: 303px;
    height: 45px;
    padding-left:10px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
  }

  input::-webkit-input-placeholder {
    color: #DBDBDB;
    font-size: 20px;
    font-weight: 400;
  }
`