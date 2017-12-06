import Card from '../Card';

describe('Card', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Card();

		expect(component).toMatchSnapshot();
	});

	it('should render horizontal', () => {
		component = new Card({
			horizontal: true
		});

		expect(component).toMatchSnapshot();
	});
});