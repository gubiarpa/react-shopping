import { useState } from 'react'

import { config } from './config'

import { useFilters } from './hooks/useFilters'

import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { products as initialProducts } from './mocks/products.json'

function App() {
	const [products] = useState(initialProducts)
	const { filters, filterProducts } = useFilters()

	const filteredProducts = filterProducts(products)

	return (
		<>
			<Header />
			<Products products={filteredProducts} />
			{config.isDevelopment && <Footer filters={filters} />}
		</>
	)
}

export default App
