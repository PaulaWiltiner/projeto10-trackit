import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignIn() {
  
	const [items, setItems] = useState([]);

  const data={
    email: "...",
    password: "..."
  };
	
	useEffect(() => {
		const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login" , data);

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