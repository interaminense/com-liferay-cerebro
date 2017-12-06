import Component from 'metal-jsx';

import RadioGroup from '../RadioGroup';

describe('RadioGroup.Option', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render Option', () => {
		component = new RadioGroup.Option();

		expect(component).toMatchSnapshot();
	});

	it('should render Option with value', () => {
		component = new RadioGroup.Option({value: 4});

		expect(component).toMatchSnapshot();
	});

	it('should render Option with label', () => {
		component = new RadioGroup.Option({label: 'foo bar'});

		expect(component).toMatchSnapshot();
	});

	it('should call `onClick` prop with value', () => {
		const onClick = jest.fn();
		const value = 'foo';

		component = new RadioGroup.Option({onClick, value});

		component.handleClick();

		expect(onClick).toHaveBeenCalledWith(value);
	});
});

class RadioGroupExample extends Component {
	render() {
		return (
			<RadioGroup {...this.otherProps()} name="foo">
				<RadioGroup.Option key={1} label="1" value={1} />
				<RadioGroup.Option key={2} label="2" value={2} />
				<RadioGroup.Option key={3} label="3" value={3} />
			</RadioGroup>
		);
	}
}

describe('RadioGroup', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render RadioGroup', () => {
		component = new RadioGroup();

		expect(component).toMatchSnapshot();
	});

	it('should render RadioGroup with children', () => {
		component = new RadioGroupExample();

		expect(component).toMatchSnapshot();
	});

	it('should render RadioGroup with a selected value', () => {
		component = new RadioGroupExample({checked: 1});

		expect(component).toMatchSnapshot();
	});

	it('should render RadioGroup as disabled', () => {
		component = new RadioGroupExample({disabled: true});

		expect(component).toMatchSnapshot();
	});
});