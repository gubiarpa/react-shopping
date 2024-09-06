import '../styles/Footer.css'

export function Footer({ filters }) {
	return (
		<footer className='footer'>
			<pre>{JSON.stringify(filters, null, 2)}</pre>
		</footer>
	)
}
