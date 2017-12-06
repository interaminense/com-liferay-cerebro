import IconCardSelector from '../IconCardSelector';

describe('IconCardSelector', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new IconCardSelector({
			items: [{symbol: 'faro-contacts-card-layout-image-left', value: 0}],
			name: 'foo',
			selected: 0
		});

		expect(component).toMatchSnapshot();
	});
});