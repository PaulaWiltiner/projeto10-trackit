import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DeleteHabit() {

	const token='token_usuario'
  const idHabito='token_usuario'

	const config = {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}
	
	const [items, setItems] = useState([]);

	useEffect(() => {
		const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}/check` ,  config);

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