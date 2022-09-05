import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "./App"

describe('Navigate home when you click in logo', () => {
	test('', () => {
		const root = document.createElement('div')
		document.body.appendChild(root)
		render(
			<MemoryRouter initialEntries={['./home']}>
				<App/>
			</MemoryRouter>,
			root
		)
	})
})