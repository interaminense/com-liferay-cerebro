jest.mock('shared/actions/overlays');

import * as actions from 'shared/actions/overlays';
import Dropdown from '../Dropdown';
import {renderWithStore} from 'test/mock-store';

describe('Dropdown', () => {
	let component;

	actions.show.mockReturnValue({type: 'NOOP'});
	actions.hide.mockReturnValue({type: 'NOOP'});

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = renderWithStore(Dropdown);

		expect(component).toMatchSnapshot();
	});

	it('should render without caret', () => {
		component = renderWithStore(Dropdown, {showCaret: false});

		expect(component).toMatchSnapshot();
	});

	it('should render with a different button display', () => {
		component = renderWithStore(Dropdown, {buttonProps: {display: 'link'}});

		expect(component).toMatchSnapshot();
	});

	it('should render items as links when href is passed to an item', () => {
		component = new Dropdown.Item({href: '#foo'});

		expect(component).toMatchSnapshot();
	});

	it('should open dropdown when handleToggle is called', () => {
		component = renderWithStore(Dropdown);

		expect(actions.show).not.toHaveBeenCalled();

		component.handleToggle();

		jest.runAllTimers();

		expect(actions.show).toHaveBeenCalled();
	});
});