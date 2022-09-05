import { render } from "@testing-library/react"
import {prettyDOM} from '@testing-library/dom'
import Header from "./Header"

describe('Header', () => {
	test('Link to home', () => {
		const component = render(<Header />)
		const div = component.container.querySelector('div')
		console.log(prettyDOM(div));
	});
});