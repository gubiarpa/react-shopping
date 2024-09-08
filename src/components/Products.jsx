import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

import '../styles/Products.css'

const ProductsWithResults = ({ products }) => {
	const { cart, addToCart, removeFromCart, clearFromCart } = useCart()

	const checkProductInCart = ({ id }) => cart.some((item) => item.id === id)

	return (
		<ul>
			{products.map((product) => {
				const { id, title, price, images } = product
				const isProductInCart = checkProductInCart({ id })

				return (
					<li key={id}>
						<img
							src={images ? images[0] : ''}
							alt={title}
						/>
						<div>
							<strong>{title}</strong> - ${price}
						</div>
						<div>
							{isProductInCart ? (
								<button
									title='Remove from cart'
									className={isProductInCart ? 'remove' : 'add'}
									onClick={() => clearFromCart(product)}
								>
									<RemoveFromCartIcon />
								</button>
							) : (
								<button
									title='Add to cart'
									className={isProductInCart ? 'remove' : 'add'}
									onClick={() => addToCart(product)}
								>
									<AddToCartIcon />
								</button>
							)}
						</div>
					</li>
				)
			})}
		</ul>
	)
}

const ProductsWithoutResults = () => {
	return <span>No products found =(</span>
}

export function Products({ products }) {
	return (
		<main className='products'>
			{products.length > 0 ? (
				<ProductsWithResults products={products} />
			) : (
				<ProductsWithoutResults />
			)}
		</main>
	)
}
