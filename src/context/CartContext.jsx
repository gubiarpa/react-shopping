import { useState, createContext } from 'react'

// 1. Create Context
export const CartContext = createContext()

// 2. Create Provider to provide the created context
export function CartProvider({ children }) {
	const [cart, setCart] = useState([])

	const addToCart = (product) => {
		const productInCartIndex = cart.findIndex(({ id }) => id === product.id)

		if (productInCartIndex === -1) {
			return setCart((prevState) => [...prevState, { ...product, quantity: 1 }])
		}

		const newCart = structuredClone(cart)
		newCart[productInCartIndex].quantity++
		return setCart(newCart)
	}

	const removeFromCart = (product) => {
		const productInCartIndex = cart.findIndex(({ id }) => id === product.id)

		if (productInCartIndex === -1) {
			return
		}

		const newCart = structuredClone(cart)

		if (newCart[productInCartIndex].quantity === 1) {
			return clearFromCart(product)
		}

		newCart[productInCartIndex].quantity--
		return setCart(newCart)
	}

	const clearFromCart = ({ id }) => {
		setCart(cart.filter((item) => item.id !== id))
	}

	const clearCart = () => {
		setCart([])
	}

	return (
		<CartContext.Provider
			value={{
				cart,
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
