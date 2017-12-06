import Item from '../Item';

describe('Item', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Item();

		expect(component).toMatchSnapshot();
	});
});