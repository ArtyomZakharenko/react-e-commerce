import { useEffect, useContext, useReducer, ReactNode, createContext } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const initialState = {}

const CartContext = createContext(null);

export const CartProvider = ({ children } : {children: ReactNode}) => {
  return (
    <CartContext.Provider value='cart context'>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
