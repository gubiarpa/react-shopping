import { createContext, useReducer } from 'react'
import {
	cartInitialState,
	cartReducer,
	cartReducerAction,
} from '../reducers/cartReducer'

// 1. Create Context
export const CartContext = createContext()

// 2. Create Provider to provide the created context
export function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, cartInitialState)

	const addToCart = (product) =>
		dispatch({ type: cartReducerAction.addToCart, payload: product })
	const removeFromCart = (product) =>
		dispatch({ type: cartReducerAction.removeFromCart, payload: product })
	const clearFromCart = (product) =>
		dispatch({ type: cartReducerAction.clearFromCart, payload: product })
	const clearCart = (product) =>
		dispatch({ type: cartReducerAction.clearCart, payload: product })

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
