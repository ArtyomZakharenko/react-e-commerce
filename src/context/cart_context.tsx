import { useEffect, useContext, useReducer, ReactNode, createContext } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'
import { ISingleProduct } from "../models/product";
import { ICartState } from "../models/states";
import { ICartItem } from "../models/cart";

const getLocalStorage = (): ICartItem[] => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState: ICartState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
}

const CartContext = createContext(null);

export const CartProvider = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // add to cart
  const addToCart = (id: string, color: string, amount: number, product: ISingleProduct) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }
  // remove item
  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }
  // toggle amount
  const toggleAmount = (id: string, value: number) => {
    dispatch({
      type: TOGGLE_CART_ITEM_AMOUNT,
      payload: {
        id,
        value,
      },
    })
  }
  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: COUNT_CART_TOTALS })
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
