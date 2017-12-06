import Alert from '../Alert';

describe('Alert', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Alert();

		expect(component).toMatchSnapshot();
	});

	it('should render as a notification alert', () => {
		component = new Alert({
			notification: true
		});

		expect(component).toMatchSnapshot();
	});

	it('should render as dismissable', () => {
		component = new Alert({
			onClose: () => {}
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with a title', () => {
		component = new Alert({
			title: 'hello world'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with a specific type', () => {
		component = new Alert({
			type: Alert.TYPES[1]
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with content', () => {
		component = new Alert({
			children: ['hello children']
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with multiple config set', () => {
		component = new Alert({
			children: ['hello children'],
			notification: true,
			onClose: () => {},
			title: 'this is a title'
		});

		expect(component).toMatchSnapshot();
	});
});