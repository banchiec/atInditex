import {render} from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import App from '../App'
import ProductsScreen from '../screen/ProductsScreen/ProductsScreen'
test('Clicking filter links updates product query params', () => {
	let testLocation, testHistory
	render(
		<MemoryRouter initialEntries={['/product']}>
			<App/>
			<Route
				path='*'
			/>
		</MemoryRouter>,
	)
})