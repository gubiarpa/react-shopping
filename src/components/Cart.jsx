import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'

import { useCart } from '../hooks/useCart'

import '../styles/Cart.css'

export function Cart() {
	const cartCheckboxId = useId()

	const { cart, addToCart, removeFromCart, clearCart } = useCart()

	return (
		<>
			<label
				className='cart-button'
				htmlFor={cartCheckboxId}
			>
				<CartIcon />
			</label>
			<input
				id={cartCheckboxId}
				type='checkbox'
				hidden
			/>
			<aside className='cart'>
				<ul>
					{cart.map((item) => {
						const { id, title, images, quantity } = item
						return (
							<li key={id}>
								<img
									src={images[0]}
									alt={title}
								/>
								<div>
									<strong>{title}</strong>
								</div>
								<footer>
									<button onClick={() => removeFromCart(item)}>-</button>
									<small>Qty: {quantity}</small>
									<button onClick={() => addToCart(item)}>+</button>
								</footer>
							</li>
						)
					})}
				</ul>
				{cart.length > 0 ? (
					<button
						title='Clear cart'
						className={'clear-cart'}
						onClick={() => clearCart()}
					>
						<ClearCartIcon />
					</button>
				) : (
					<small>No items in the car</small>
				)}
			</aside>
		</>
	)
}
