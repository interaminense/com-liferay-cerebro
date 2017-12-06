import Label from '../Label';

describe('Label', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Label();

		expect(component).toMatchSnapshot();
	});

	it('should render as required', () => {
		component = new Label({required: true});

		expect(component).toMatchSnapshot();
	});
});