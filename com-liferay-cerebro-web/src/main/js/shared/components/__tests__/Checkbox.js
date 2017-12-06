import Checkbox from '../Checkbox';

describe('Checkbox', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Checkbox();

		expect(component).toMatchSnapshot();
	});
});