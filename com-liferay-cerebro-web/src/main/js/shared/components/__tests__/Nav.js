import Nav from '../Nav';

describe('Nav', () => {
	let component;

	const items = [
		<Nav.Item active href="#" key={1}>
			{'foo'}
		</Nav.Item>,
		<Nav.Item key={2}>{'bar'}</Nav.Item>,
		<Nav.Item key={3}>{'baz'}</Nav.Item>
	];

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Nav();

		expect(component).toMatchSnapshot();
	});

	it('should render vertically', () => {
		component = new Nav({
			vertical: true
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with items', () => {
		component = new Nav({
			children: items
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with items as pills', () => {
		component = new Nav({
			children: items,
			display: 'pills'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with items as tabs', () => {
		component = new Nav({
			children: items,
			display: 'tabs'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with underline class', () => {
		component = new Nav({
			children: items,
			display: 'underline'
		});

		expect(component).toMatchSnapshot();
	});
});