import Select from '../Select';

describe('Select', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Select({name: 'test'});

		expect(component).toMatchSnapshot();
	});

	it('should render with a label', () => {
		component = new Select({label: 'foo', name: 'test'});

		expect(component).toMatchSnapshot();
	});

	it('should render help block with a message', () => {
		component = new Select({name: 'test'});

		component.setState({message: 'test', show: true});

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should set state.value to new target value', () => {
		const foo = 'foo';
		component = new Select({name: 'test'});

		expect(component.state.value).not.toBe(foo);

		component.handleChange({target: {value: foo}});

		jest.runAllTimers();

		expect(component.state.value).toBe(foo);
	});

	it('should call `validateFormElement` if state.show is true', () => {
		component = new Select({name: 'test'});

		component.validateFormElement = jest.fn();

		component.state.show = true;

		expect(component.validateFormElement).not.toHaveBeenCalled();

		component.handleChange({target: {value: 'foo'}});

		expect(component.validateFormElement).toHaveBeenCalled();
	});

	it('should check if `required` validator is present', () => {
		component = new Select({name: 'test'});

		expect(component.isRequired()).toBeFalsy();

		component.props.validator = {required: true};

		jest.runAllTimers();

		expect(component.isRequired()).toBe(true);
	});
});