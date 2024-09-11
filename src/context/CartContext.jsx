import { createContext, useReducer } from 'react'
import {
	cartInitialState,
	cartReducer,
	cartReducerAction,
} from '../reducers/cartReducer'
import { useCartReducer } from '../hooks/useCartReducer'

// 1. Create Context
export const CartContext = createContext()

// 2. Create Provider to provide the created context
export function CartProvider({ children }) {
	const { state, addToCart, removeFromCart, clearFromCart, clearCart } =
		useCartReducer()

	return (
		<CartContext.Provider
			value={{
				cart: state,
				addToCart,
				removeFromCart,
				clearFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
