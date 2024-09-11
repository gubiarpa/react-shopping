import { createContext, useReducer } from 'react'

// 1. Create Context
export const CartContext = createContext()

const initialState = []

const reducerAction = {
	addToCart: 'ADD_TO_CART',
	removeFromCart: 'REMOVE_FROM_CART',
	clearFromCart: 'CLEAR_FROM_CART',
	clearCart: 'CLEAR_CART',
}

const reducer = (state, action) => {
	const { type, payload } = action

	const getPayloadIndex = ({ state, payload }) => {
		return state.findIndex(({ id }) => id === payload.id)
	}

	const addToCart = ({ state, payload }) => {
		const payloadIndex = getPayloadIndex({ state, payload })

		if (payloadIndex === -1) {
			return [...state, { ...payload, quantity: 1 }]
		}

		const newState = structuredClone(state)
		newState[payloadIndex].quantity++
		return newState
	}

	const clearFromCart = ({ state, payload }) => {
		return state.filter((item) => item.id !== payload.id)
	}

	const removeFromCart = ({ state, payload }) => {
		const payloadIndex = getPayloadIndex({ state, payload })

		if (payloadIndex === -1) {
			return state
		}

		const newState = structuredClone(state)

		if (newState[payloadIndex].quantity === 1) {
			return clearFromCart({ state, payload })
		}

		newState[payloadIndex].quantity--
		return newState
	}

	switch (type) {
		case reducerAction.addToCart:
			return addToCart({ state, payload })
		case reducerAction.removeFromCart:
			return removeFromCart({ state, payload })
		case reducerAction.clearFromCart:
			return clearFromCart({ state, payload })
		case reducerAction.clearCart:
			return initialState
	}
	
	return state
}

// 2. Create Provider to provide the created context
export function CartProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)

	const addToCart = (product) =>
		dispatch({ type: reducerAction.addToCart, payload: product })
	const removeFromCart = (product) =>
		dispatch({ type: reducerAction.removeFromCart, payload: product })
	const clearFromCart = (product) =>
		dispatch({ type: reducerAction.clearFromCart, payload: product })
	const clearCart = (product) =>
		dispatch({ type: reducerAction.clearCart, payload: product })

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
