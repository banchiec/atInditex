import { render } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import Header from "../Header/Header"

describe('Contains the text SHOP MOBILE', () => {
	let testLocation
	test('Check text', () => {
		const root = document.createElement('div')
		document.body.appendChild(root)
	  const component =	render(
			<MemoryRouter initialEntries={['/product']}>
				<Header/>
			</MemoryRouter>,
			root
		)
		expect(component.getByText('SHOP MOBILE'))
	})
})

describe('Check navigation to product', () => {
	let testLocation
	test('Check text', () => {
		const root = document.createElement('div')
		document.body.appendChild(root)
	  const component =	render(
			<MemoryRouter initialEntries={['/product']}>
				<Header/>
			</MemoryRouter>,
			root
		)
		expect(component.getByText('SHOP MOBILE'))
	})
}