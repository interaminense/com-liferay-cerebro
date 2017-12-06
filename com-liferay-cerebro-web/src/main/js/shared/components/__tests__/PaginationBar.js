import PaginationBar from '../PaginationBar';
import {renderWithStore} from 'test/mock-store';

describe('PaginationBar', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = renderWithStore(PaginationBar, {
			href: '',
			page: 3,
			selectedDelta: 10,
			totalItems: 100
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with buttons if passed an onPageChange handler', () => {
		component = renderWithStore(PaginationBar, {
			onPageChange: jest.fn(),
			page: 3,
			selectedDelta: 10,
			totalItems: 100
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with small size', () => {
		component = renderWithStore(PaginationBar, {
			href: '',
			page: 3,
			selectedDelta: 10,
			size: 'sm',
			totalItems: 100
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with large size', () => {
		component = renderWithStore(PaginationBar, {
			href: '',
			page: 3,
			selectedDelta: 10,
			size: 'lg',
			totalItems: 100
		});

		expect(component).toMatchSnapshot();
	});

	it('should render different deltas', () => {
		component = renderWithStore(PaginationBar, {
			deltas: [1, 2, 3, 4],
			href: '',
			page: 1,
			selectedDelta: 1,
			totalItems: 10
		});

		expect(component).toMatchSnapshot();
	});
});