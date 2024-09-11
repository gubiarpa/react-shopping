import { useReducer } from 'react'
import {
	cartInitialState,
	cartReducer,
	cartReducerAction,
} from '../reducers/cartReducer'

export const useCartReducer = () => {
	const [state, dispatch] = useReducer(cartReducer, cartInitialState)

	const addToCart = (product) =>
		dispatch({ type: cartReducerAction.addToCart, payload: product })
	const removeFromCart = (product) =>
		dispatch({ type: cartReducerAction.removeFromCart, payload: product })
	const clearFromCart = (product) =>
		dispatch({ type: cartReducerAction.clearFromCart, payload: product })
	const clearCart = (product) =>
		dispatch({ type: cartReducerAction.clearCart, payload: product })

	return { state, addToCart, removeFromCart, clearFromCart, clearCart }
}
