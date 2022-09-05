import { render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Header from "./components/Header/Header"

describe('Navigate home when you click in logo', () => {
	test('', () => {
		const root = document.createElement('div')
		document.body.appendChild(root)
	  const { getByText }=	render(
			<MemoryRouter initialEntries={['/product']}>
				<Header/>
			</MemoryRouter>,
			root
		)
		expect(getByText('FRONTEND - TEST'))
	})
})