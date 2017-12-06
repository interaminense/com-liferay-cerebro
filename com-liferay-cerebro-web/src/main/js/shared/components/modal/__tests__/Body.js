import Body from '../Body';

describe('Modal Body', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Body();

		expect(component).toMatchSnapshot();
	});
});