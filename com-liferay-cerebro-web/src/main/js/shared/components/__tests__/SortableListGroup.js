import SortableListGroup from '../SortableListGroup';

describe('SortableListGroup', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new SortableListGroup({
			items: [{id: 1, name: 'foo'}, {id: 2, name: 'bar'}]
		});

		expect(component).toMatchSnapshot();
	});
});