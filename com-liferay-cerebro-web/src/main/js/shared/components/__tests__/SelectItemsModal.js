import Promise from 'metal-promise';

import SelectItemsModal from '../SelectItemsModal';

describe('SelectItemsModal', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new SelectItemsModal({
			dataSourceFn: () => Promise.resolve()
		});

		expect(component).toMatchSnapshot();
	});
});