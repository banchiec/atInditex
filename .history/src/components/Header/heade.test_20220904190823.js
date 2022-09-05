import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"

describe('Header', () => {
	test('Link to home', () => {
		const history = createMemoryHistory({initialEntries: ['/']})
		const {getBytext} = render (
			<Router history={history}>

			</Router>
		)
	})
})