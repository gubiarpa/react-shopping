import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'

import '../styles/Footer.css'

export function Footer() {
	const { filters } = useFilters()
	const { cart } = useCart()

	return (
		<footer className='footer'>
			<pre>{JSON.stringify({ filters, cart }, null, 2)}</pre>
		</footer>
	)
}
