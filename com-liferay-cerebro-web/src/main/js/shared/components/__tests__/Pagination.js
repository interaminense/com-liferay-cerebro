import Pagination from '../Pagination';
import {renderWithStore} from 'test/mock-store';

describe('Pagination', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = renderWithStore(Pagination, {href: '', page: 1, total: 1});

		expect(component).toMatchSnapshot();
	});

	it('should render with buttons if passed an onChange handler', () => {
		component = renderWithStore(Pagination, {
			onChange: jest.fn(),
			page: 1,
			total: 1
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with a lot of pages', () => {
		component = renderWithStore(Pagination, {
			href: '',
			page: 1,
			total: 100
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a lot of pages with a middle page active', () => {
		component = renderWithStore(Pagination, {
			href: '',
			page: 50,
			total: 100
		});

		expect(component).toMatchSnapshot();
	});

	it('should render a lot of pages with the end page active', () => {
		component = renderWithStore(Pagination, {
			href: '',
			page: 100,
			total: 100
		});

		expect(component).toMatchSnapshot();
	});
});