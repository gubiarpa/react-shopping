import { useId, useContext } from 'react'

import '../styles/Filters.css'

import { FiltersContext } from '../context/FiltersContext'

import { products } from '../mocks/products.json'
import { categories } from '../mocks/categories.json'

export function Filters() {
	const { filters, setFilters } = useContext(FiltersContext)

	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleOnChangeMinPrice = (event) => {
		setFilters((prevState) => ({
			...prevState,
			minPrice: event.target.value,
		}))
	}

	const handleOnChangeCategory = (event) => {
		setFilters((prevState) => ({
			...prevState,
			category: event.target.value,
		}))
	}

	const getCategories = () => {
		const activeCategories = [
			...new Set(products.map((product) => product.category)),
		]
		return categories.filter((category) =>
			activeCategories.includes(category.key)
		)
	}

	return (
		<section className='filters'>
			<div>
				<label htmlFor={minPriceFilterId}>Min Price</label>
				<input
					type='range'
					id={minPriceFilterId}
					min={0}
					max={1000}
					step={50}
					onChange={handleOnChangeMinPrice}
				/>
				<span>$ {filters.minPrice}</span>
			</div>

			<div>
				<label htmlFor={categoryFilterId}>Category</label>
				<select
					id={categoryFilterId}
					onChange={handleOnChangeCategory}
				>
					<option value='all'>All</option>
					{getCategories().map(({ key, description }) => (
						<option
							key={key}
							value={key}
						>
							{description}
						</option>
					))}
				</select>
			</div>
		</section>
	)
}
