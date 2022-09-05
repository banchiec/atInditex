import { render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"

describe('Contains the text SHOP MOBILE', () => {
	test('Check test', () => {
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