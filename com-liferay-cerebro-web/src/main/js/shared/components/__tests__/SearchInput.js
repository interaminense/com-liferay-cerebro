import SearchInput from '../SearchInput';

describe('SearchInput', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render input', () => {
		component = new SearchInput();

		expect(component).toMatchSnapshot();
	});

	it('should return input value if key is `Enter`', () => {
		const onSubmit = jest.fn();
		const value = 'foo';

		component = new SearchInput({onSubmit, value});

		component.handleKeyDown({key: 'Enter'});

		expect(onSubmit).toHaveBeenCalledWith(value);
	});

	it('should return input value', () => {
		const onSubmit = jest.fn();
		const value = 'foo';

		component = new SearchInput({onSubmit, value});

		component.handleSubmit();

		expect(onSubmit).toHaveBeenCalledWith(value);
	});
});