import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignUp() {
  
	const [items, setItems] = useState([]);

  const data={
    email: "...",
    name: "...",
    image: "...",
    password: "..."
  };
	
	useEffect(() => {
		const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up" , data);

		promise.then(response => {
			setItems(response.data);
			
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