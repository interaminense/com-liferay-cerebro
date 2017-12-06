import ItemField from '../ItemField';

describe('ItemField', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new ItemField();

		expect(component).toMatchSnapshot();
	});
});