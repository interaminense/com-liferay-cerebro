import {mockIndividual} from 'test/data';

import EntityList from '../EntityList';

const items = [
	mockIndividual(0, {total: 123}),
	mockIndividual(1, {total: 123}),
	mockIndividual(2, {total: 123})
];

describe('EntityList', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new EntityList({
			items
		});

		expect(component).toMatchSnapshot();
	});

	it('should render with header named `foo bar`', () => {
		component = new EntityList({
			header: 'foo bar',
			items
		});

		expect(component).toMatchSnapshot();
	});
});