import { useState, createContext } from 'react'

// 1. Create Context
export const FiltersContext = createContext()

// 2. Create Provider to provide the created context
export function FiltersProvider({ children }) {
	const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })
	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	)
}
