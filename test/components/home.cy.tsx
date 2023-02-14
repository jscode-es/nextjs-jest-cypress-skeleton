import Home from '@/pages';
import { cy, it } from 'local-cypress';

describe('<Home/>', () => {
	it('Render', () => {
		cy.mount(<Home />);
	});
});
