import { useEffect} from 'react'

export default function Comprar({data}){
 

 useEffect(()=>{
  const script = document.createElement('script'); //Crea un elemento html script
  const attr_data_preference = document.createAttribute('data-preference-id') //Crea un nodo atribute
  attr_data_preference.value = data.id  //Le asigna como valor el id que devuelve MP

  //Agrega atributos al elemento script
  script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";  
  script.setAttributeNode(attr_data_preference)  

  
  //Agrega el script como nodo hijo del elemento form
  document.getElementById('form1').appendChild(script)
  
 },[data])
 
  return(
    <div>
      <form id='form1'>  
      </form>
    </div>
    )
}