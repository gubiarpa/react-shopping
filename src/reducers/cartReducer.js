export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export const cartReducerAction = {
	addToCart: 'ADD_TO_CART',
	removeFromCart: 'REMOVE_FROM_CART',
	clearFromCart: 'CLEAR_FROM_CART',
	clearCart: 'CLEAR_CART',
}

export const updateLocalStorage = (state) =>
	localStorage.setItem('cart', JSON.stringify(state))

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

	let newState = state
	switch (type) {
		case cartReducerAction.addToCart:
			newState = addToCart({ state, payload })
			break
		case cartReducerAction.removeFromCart:
			newState = removeFromCart({ state, payload })
			break
		case cartReducerAction.clearFromCart:
			newState = clearFromCart({ state, payload })
			break
		case cartReducerAction.clearCart:
			newState = []
			break
	}

	updateLocalStorage(newState)
	return newState
}
