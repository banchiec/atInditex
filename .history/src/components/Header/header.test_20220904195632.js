import { render } from "@testing-library/react"
import {prettyDOM} from '@testing-library/dom'
import Header from "./Header"

describe('Header', () => {
	test('Link to home', () => {
		const history = createMemoryHistory({initialEntries: ['/']});
		const component = render(<Header />)
		const div = component.container.querySelector('div')

		// const {getByText} = render (
		// 	<Router history={history}>
		// 		<Header/>
		// 	</Router>
		// )
		// expect(history.location.pathname).toBe('./');
		// fireEvent.click(getBytext('FRONTEND - TEST'));
		// expect(history.location.pathname).toBe('/');

	});
});