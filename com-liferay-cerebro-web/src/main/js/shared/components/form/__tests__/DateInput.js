import DateInput from '../DateInput';
import {renderWithStore} from 'test/mock-store';

describe('DateInput', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = renderWithStore(DateInput, {name: 'foo'});

		expect(component).toMatchSnapshot();
	});
});