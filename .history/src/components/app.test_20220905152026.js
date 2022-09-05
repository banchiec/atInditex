import {render} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
test('Clicking filter links updates product query params', () => {
	let testLocation
	render(
		<MemoryRouter initialEntries={['/product']}>
			<App/>
			<Route
				path='*'
				render={({ history, location})=> {
					testLocation = location
					return null
				}}
			/>
		</MemoryRouter>,
		expect(testLocation.pathname).toBe("/product")
	)
})