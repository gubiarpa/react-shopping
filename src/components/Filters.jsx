import '../styles/Filters.css'

export function Filters() {
	return (
		<>
			<section className='filters'>
				<div>
					<label htmlFor='price'>Price</label>
					<input
						type='range'
						id='price'
						min={0}
						max={1000}
					/>
				</div>

				<div>
					<label htmlFor='category'>Category</label>
					<select id='category'>
						<option value='all'>All</option>
						<option value='laptops'>Laptops</option>
						<option value='smartphones'>Smartphones</option>
						<option value='beauty'>Beauty</option>
					</select>
				</div>
			</section>
		</>
	)
}
