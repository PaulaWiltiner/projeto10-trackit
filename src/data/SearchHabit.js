import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchHabit() {
  
  const token='token_usuario'
  
  const config = {
		headers: {
			"Authorization": `Bearer ${token}`
		}
	}

	const [items, setItems] = useState([]);
	
	useEffect(() => {
		const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);

		promise.then(response => {
			setItems(response.data);
			
		});
	}, []);

	if(items.length!==0){
		//props.statusLoad(false)
	}

	return (
		<>
	
		</>
	)
}