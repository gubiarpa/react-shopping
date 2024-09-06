import { useState } from 'react'

import { useFilters } from './hooks/useFilters'

import { Products } from './components/Products'
import { Header } from './components/Header'

import { products as initialProducts } from './mocks/products.json'

function App() {
	const [products] = useState(initialProducts)
	const { filterProducts, setFilters } = useFilters()

	const filteredProducts = filterProducts(products)

	return (
		<>
			<Header changeFilters={setFilters} />
			<Products products={filteredProducts} />
		</>
	)
}

export default App
