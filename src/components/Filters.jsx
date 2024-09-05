import { useState } from 'react'

import '../styles/Filters.css'

import { categories } from '../mocks/categories.json'

export function Filters({ changeFilters }) {
	const [minPrice, setMinPrice] = useState(0)

	const handleOnChangeMinPrice = (event) => {
		setMinPrice(event.target.value)
		changeFilters((prevState) => ({
			...prevState,
			minPrice: event.target.value,
		}))
	}

	const handleOnChangeCategory = (event) => {
		changeFilters((prevState) => ({
			...prevState,
			category: event.target.value,
		}))
	}

	return (
		<section className='filters'>
			<div>
				<label htmlFor='price'>Min Price</label>
				<input
					type='range'
					id='price'
					min={0}
					max={1000}
					step={50}
					onChange={handleOnChangeMinPrice}
				/>
				<span>$ {minPrice}</span>
			</div>

			<div>
				<label htmlFor='category'>Category</label>
				<select
					id='category'
					onChange={handleOnChangeCategory}
				>
					<option value='all'>All</option>
					{categories.map(({ key, description }) => (
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
