import Form from '../index';

describe('Form', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render a Form', () => {
		component = new Form();

		expect(component).toMatchSnapshot();
	});

	it('should add item to formElements array', () => {
		component = new Form();

		component.addFormElement(1);

		expect(component._formElements).toEqual([1]); // eslint-disable-line no-underscore-dangle
	});

	it('should remove item to formElements array', () => {
		component = new Form();

		component._formElements = [1]; // eslint-disable-line no-underscore-dangle

		component.removeFormElement(1);

		expect(component._formElements).toEqual([]); // eslint-disable-line no-underscore-dangle
	});

	it('should prevent Form from submitting if validate is false', () => {
		component = new Form();

		component.validate = jest.fn(() => false);

		const spy = jest.fn();

		component.handleSubmit({preventDefault: spy});

		expect(spy).toHaveBeenCalled();
	});

	it('should call onChange when a descendant calls informChange', () => {
		const onChange = jest.fn();

		component = new Form({
			onChange
		});

		expect(onChange).not.toHaveBeenCalled();

		component.getChildContext().ancestorForm.informChange('foo');

		expect(onChange).toHaveBeenCalledWith({}, 'foo');
	});

	it('should call onSubmit when the form is submitted', () => {
		const onSubmit = jest.fn();

		component = new Form({
			onSubmit
		});

		expect(onSubmit).not.toHaveBeenCalled();

		component.handleSubmit({preventDefault: jest.fn()});

		expect(onSubmit).toHaveBeenCalledWith({});
	});

	it('should render a Form Group', () => {
		component = new Form.Group();

		expect(component).toMatchSnapshot();
	});

	it('should render an inline Form Group', () => {
		component = new Form.Group({inline: true});

		expect(component).toMatchSnapshot();
	});

	it('should render an autofit Form Group', () => {
		component = new Form.Group({autoFit: true});

		expect(component).toMatchSnapshot();
	});
});