import Avatar from '../Avatar';

describe('Avatar', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Avatar();

		expect(component).toMatchSnapshot();
	});

	it('should render with a first name', () => {
		component = new Avatar({
			firstName: 'foo'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with a first and last name', () => {
		component = new Avatar({
			firstName: 'foo',
			lastName: 'bar'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with a specific size', () => {
		component = new Avatar({
			size: 'xl'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with a specific color id', () => {
		component = new Avatar({
			colorId: 4
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with a portraitURL', () => {
		component = new Avatar({
			portraitURL: 'http://i.imgur.com/G5pfP.jpg'
		});

		expect(component).toMatchSnapshot();
	});
});