import React from 'react'
import { Link } from 'react-router-dom'
import GetOrders from './GetOrders'

const OrdersPanel = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to='/clients'> <button >Clients Panel</button></Link>
            <Link to='/adminCategories'> <button >Categories Panel</button></Link>
            <Link to='/clientsPanel'> <button >Clients Panel</button></Link>
            <h1>Orders Panel</h1>
            <GetOrders />
        </div>
    )
}

export default OrdersPanel
