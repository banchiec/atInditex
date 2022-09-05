import { render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"

describe('Contains the text SHOP MOBILE', () => {
	test('Check text', () => {
		const root = document.createElement('div')
	  const component =	render(
			<MemoryRouter initialEntries={['/']}>
				<Header/>
			</MemoryRouter>,
			root
		)
		expect(component.getByText('SHOP MOBILE'))
	})
})