import { render } from "@testing-library/react"
import {prettyDOM} from '@testing-library/dom'
import Header from "./Header"
import { createMemoryHistory } from "history";

describe('Redirects to product page', () => {
	test('Link to product page', () => {
		const history = createMemoryHistory()
		render(
			<Router>
				<App />
			</Router>
		)
		const component = render(<Header />)
		// const div = component.container.querySelector('div')
		// console.log(prettyDOM(div));
	});
});