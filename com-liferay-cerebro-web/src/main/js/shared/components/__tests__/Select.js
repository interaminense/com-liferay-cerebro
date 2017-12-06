import Select from '../Select';

describe('Select', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Select();

		expect(component).toMatchSnapshot();
	});

	it('should render with blank option', () => {
		component = new Select({showBlankOption: true});

		expect(component).toMatchSnapshot();
	});

	it('should render with children', () => {
		const children = [
			<Select.Item key={1}>{'1'}</Select.Item>,
			<Select.Item key={2}>{'2'}</Select.Item>,
			<Select.Item key={3}>{'3'}</Select.Item>
		];

		component = new Select({children});

		expect(component).toMatchSnapshot();
	});

	it('should render with child selected', () => {
		const children = [
			<Select.Item key={1}>{'1'}</Select.Item>,
			<Select.Item key={2}>{'2'}</Select.Item>,
			<Select.Item key={3} selected>
				{'3'}
			</Select.Item>
		];

		component = new Select({children});

		expect(component).toMatchSnapshot();

		expect(component.element.value).toBe('3');
	});
});