import FileDropTarget from '../FileDropTarget';

describe('FileDropTarget', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new FileDropTarget({
			name: 'fooBar',
			onChange: () => {},
			uploadURL: '/foo'
		});

		expect(component).toMatchSnapshot();
	});
});