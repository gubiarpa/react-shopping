import '../styles/Products.css'
import { AddToCartIcon } from './Icons'

export function Products({ products }) {
	return (
		<main className='products'>
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
		</main>
	)
}
