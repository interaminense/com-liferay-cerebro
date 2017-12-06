import CreateMappingModal from '../CreateMappingModal';
import {renderWithStore} from 'test/mock-store';

describe('CreateMappingModal', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = renderWithStore(CreateMappingModal);

		expect(component).toMatchSnapshot();
	});
});