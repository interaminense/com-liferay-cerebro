import NavBar from '../NavBar';

describe('NavBar', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new NavBar();

		expect(component).toMatchSnapshot();
	});

	it('should render Brand as a child', () => {
		component = new NavBar({
			children: [<NavBar.Brand key="foo">{'foo bar'}</NavBar.Brand>]
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with light display', () => {
		component = new NavBar({display: 'light'});

		expect(component).toMatchSnapshot();
	});

	it('should render with dark display', () => {
		component = new NavBar({display: 'dark'});

		expect(component).toMatchSnapshot();
	});
});