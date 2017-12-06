import Footer from '../Footer';

describe('Modal Footer', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Footer();

		expect(component).toMatchSnapshot();
	});
});