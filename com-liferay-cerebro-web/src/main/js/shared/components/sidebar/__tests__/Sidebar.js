import Sidebar from '../index';

describe('Sidebar', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Sidebar();

		expect(component).toMatchSnapshot();
	});
});