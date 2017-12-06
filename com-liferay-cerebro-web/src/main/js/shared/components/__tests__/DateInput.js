import moment from 'moment';

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
		component = renderWithStore(DateInput);

		expect(component).toMatchSnapshot();
	});

	it('should call onChange', () => {
		const onChange = jest.fn();

		component = renderWithStore(DateInput, {onChange});

		expect(onChange).not.toHaveBeenCalled();

		component.handleDateSelect(moment(0));

		expect(onChange).toHaveBeenCalled();
	});
});