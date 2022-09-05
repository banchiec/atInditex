import { render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Contains the text SHOP MOBILE', () => {
	test('Check text', () => {
		const root = document.createElement('div')
		document.body.appendChild(root)
	  const { getByText }=	render(
			<MemoryRouter initialEntries={['/product']}>
			</MemoryRouter>,
			root
		)
		expect(getByText('FRONTEND - TEST'))
	})
})