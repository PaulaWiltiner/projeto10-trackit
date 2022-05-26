import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateHabit() {

	const token='token_usuario'

	const config = {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}
	
  
	const [items, setItems] = useState([]);

  const data={
    name: "Nome do hábito",
    days: [1, 3, 5] // segunda, quarta e sexta
  };
	
	useEffect(() => {
		const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits" , data, config);

		promise.then(response => {
			setItems(response.data);
      console.log(response.data)
			
		});
	}, []);

	if(items.length!==0){
	//	props.statusLoad(false)
	}

	return (
		<>
		
		</>
	)
}