import Spinner from '../Spinner';

describe('Spinner', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Spinner();

		expect(component).toMatchSnapshot();
	});

	it('should render', () => {
		component = new Spinner({
			display: 'linear',
			size: 'lg'
		});

		expect(component).toMatchSnapshot();
	});
});