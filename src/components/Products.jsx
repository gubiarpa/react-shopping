import '../styles/Products.css'
import { AddToCartIcon } from './Icons'

const ProductsWithResults = ({ products }) => {
	return (
		<ul>
			{products.map(({ id, title, price, images }) => (
				<li key={id}>
					<img
						src={images ? images[0] : ''}
						alt={title}
					/>
					<div>
						<strong>{title}</strong> - ${price}
					</div>
					<div>
						<button>
							<AddToCartIcon />
						</button>
					</div>
				</li>
			))}
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
