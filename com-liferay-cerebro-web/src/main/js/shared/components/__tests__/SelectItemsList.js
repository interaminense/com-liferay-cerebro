import SelectItemsList from '../SelectItemsList';
import {Map} from 'immutable';

const ITEMS = [
	{
		id: 1,
		name: 'Portland'
	},
	{
		id: 2,
		name: 'San Diego'
	},
	{
		id: 3,
		name: 'Seattle'
	}
];

const SELECTED_ITEMS = Map({
	1: true,
	2: true,
	3: true
});

describe('SelectItemsList', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new SelectItemsList({items: ITEMS});

		expect(component).toMatchSnapshot();
	});

	it('should render with checked items', () => {
		component = new SelectItemsList({
			items: ITEMS,
			selectedItemsIMap: SELECTED_ITEMS
		});

		expect(component).toMatchSnapshot();
	});
});