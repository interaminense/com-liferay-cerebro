import Input from '../Input';

describe('Input', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Input({name: 'foo'});

		expect(component).toMatchSnapshot();
	});
});