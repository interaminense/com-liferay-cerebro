import Button from '../Button';

describe('Button', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Button();

		expect(component).toMatchSnapshot();
	});

	it('should render as block', () => {
		component = new Button({
			block: true
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with a different type', () => {
		component = new Button({
			type: 'submit'
		});

		expect(component).toMatchSnapshot();
	});
});