import React from 'react'
import { createContext, useContext } from 'react'
import Item from './Item'
import Cart from './Cart'

function HomeContext() {
  return (
    <div>
        CART APP
        <ul>
            <Item name="Vivo"/>
            <Item name="OPPO"/>
            <Item name="APPLE"/>
            <Item name="REDMI"/>
            <Item name="SAMSUNG"/>
        </ul>
        <p>THIS IS MY CART HAVING ADDED ELEMENTS</p>
        <Cart/>
    </div>
  )
}

export default HomeContext