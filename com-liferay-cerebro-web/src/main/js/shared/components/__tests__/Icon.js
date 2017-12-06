import Icon from '../Icon';

describe('Icon', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Icon({
			symbol: 'file'
		});

		expect(component).toMatchSnapshot();
	});
});