import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const useCart = () => {
	const context = useContext(CartContext)

	if (context === undefined) {
		throw new Error('useCart must be used within a CartProvider')
	}

	const { cart, addToCart, removeFromCart, clearFromCart, clearCart } = context

	return { cart, addToCart, removeFromCart, clearFromCart, clearCart }
}
