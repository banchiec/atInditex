import { fireEvent, render } from "@testing-library/react"
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"
import Header from "./Header"

describe('Header', () => {
	test('Link to home', () => {
		const history = createMemoryHistory({initialEntries: ['/']});
		// console.log(history);
		const getByText = render (
			<Router history={history}>
				<Header/>
			</Router>
		)
		// expect(history.location.pathname).toBe('./');
		// fireEvent.click(getBytext('FRONTEND - TEST'));
		// expect(history.location.pathname).toBe('/');

	});
});