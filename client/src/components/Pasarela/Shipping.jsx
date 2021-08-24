import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { mercadopago } from '../../Redux/actions/actions'
import Checkout from '../Pasarela/checkoutMercado'
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";

export default function Shipping() {
  const dispatch = useDispatch();

  const idMercadopago = useSelector(state => state.idMercadopago)
  console.log("id mercado", idMercadopago)

  function pagoMercadopago(){
  const idOrder = localStorage.getItem('idOrderUser');
  console.log("ID", idOrder)
  dispatch(mercadopago(idOrder))
}

  return (
    <div className= { window.screen.width> 430 ?' d-flex justify-content-center rounded p-5 ' : 'containerMain'}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

				<div className='rounded'>
					<h2>How would you like to get your order?</h2>

					<div className='text-center d-flex justify-content-center'>
						<div className=''>
							<label>
								<input
									type='radio'
									name='ship'
									value='ship'
									
								/>
								Ship to your location
							</label>
						</div>
						<div className=''>
							<label>
								<input
									type='radio'
									name='ship'
									value='pick'
								
								/>
								Pick up at the store
							</label>
              
              {
              idMercadopago.id?
                <div className="App">
                  <Checkout  data={idMercadopago}/>
                </div>
                :
                <ButtonGroup
                  size="small"
                  variant="contained"
                  aria-label="contained primary button group"
                  component='div'
                >
                  <Button onClick={() => pagoMercadopago()} color="primary">
                    Next
                  </Button>
                </ButtonGroup>
              }
						</div>
					</div>
				</div>
      </div>
  )
}
