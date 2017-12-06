import LoadingModal from '../LoadingModal';

describe('LoadingModal', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new LoadingModal();

		expect(component).toMatchSnapshot();
	});

	it('should render with a message and a title', () => {
		component = new LoadingModal({
			message: 'foo',
			title: 'bar'
		});

		expect(component).toMatchSnapshot();
	});

	it('should render an icon', () => {
		component = new LoadingModal({
			icon: 'foo'
		});

		expect(component).toMatchSnapshot();
	});
});