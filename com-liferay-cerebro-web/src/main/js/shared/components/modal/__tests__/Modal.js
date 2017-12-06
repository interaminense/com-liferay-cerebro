import Modal from '../index';

describe('Modal', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Modal();

		expect(component).toMatchSnapshot();
	});
});