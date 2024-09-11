export const cartInitialState = []

export const cartReducerAction = {
	addToCart: 'ADD_TO_CART',
	removeFromCart: 'REMOVE_FROM_CART',
	clearFromCart: 'CLEAR_FROM_CART',
	clearCart: 'CLEAR_CART',
}

export const cartReducer = (state, action) => {
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
		case cartReducerAction.addToCart:
			return addToCart({ state, payload })
		case cartReducerAction.removeFromCart:
			return removeFromCart({ state, payload })
		case cartReducerAction.clearFromCart:
			return clearFromCart({ state, payload })
		case cartReducerAction.clearCart:
			return cartInitialState
	}

	return state
}
