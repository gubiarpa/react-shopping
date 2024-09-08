import { useState } from 'react'

import { config } from './config'

// Context, Custom Hooks
import { CartProvider } from './context/CartContext'
import { useFilters } from './hooks/useFilters'

// Components
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Products } from './components/Products'

// Mocks
import { products as initialProducts } from './mocks/products.json'

function App() {
	const [products] = useState(initialProducts)
	const { filterProducts } = useFilters()

	const filteredProducts = filterProducts(products)

	return (
		<>
			<CartProvider>
				<Header />
				<Cart />
				<Products products={filteredProducts} />
			</CartProvider>
		</>
	)
}

export default App
