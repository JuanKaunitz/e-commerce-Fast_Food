import { useSelector } from "react-redux";


export  const localStorage = (token, client) => {
  let client = useSelector((state) => state.client);
  let token = useSelector((state) => state.clientToken);

  if(!token && !client.role ){
    if(localStorage.getItem('token')){
      token = localStorage.getItem('token')
    }
    if(localStorage.getItem('client')){
      client = localStorage.getItem('client')
    }
  }
  return 
}