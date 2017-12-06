import Input from '../Input';

describe('Input', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render input', () => {
		component = new Input();

		expect(component).toMatchSnapshot();
	});

	it('should render input with a different size', () => {
		component = new Input({size: 'lg'});

		expect(component).toMatchSnapshot();
	});

	it('should render input group', () => {
		component = new Input.Group();

		expect(component).toMatchSnapshot();
	});

	it('should render input group with different size', () => {
		component = new Input.Group({size: 'lg'});

		expect(component).toMatchSnapshot();
	});

	it('should render input group with inset', () => {
		component = new Input.Group({inset: true});

		expect(component).toMatchSnapshot();
	});

	it('should render input group input', () => {
		component = new Input.GroupInput();

		expect(component).toMatchSnapshot();
	});

	it('should render input inset', () => {
		component = new Input.Inset();

		expect(component).toMatchSnapshot();
	});

	it('should render input button', () => {
		component = new Input.Button();

		expect(component).toMatchSnapshot();
	});

	it('should render input addon', () => {
		component = new Input.Addon();

		expect(component).toMatchSnapshot();
	});
});