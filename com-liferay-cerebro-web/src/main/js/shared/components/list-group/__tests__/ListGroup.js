import ListGroup from '../index';

describe('ListGroup', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new ListGroup();

		expect(component).toMatchSnapshot();
	});
});