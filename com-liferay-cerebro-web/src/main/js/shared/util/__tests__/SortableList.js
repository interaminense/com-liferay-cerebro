import SortableList from '../SortableList';

describe('SortableList', () => {
	let component;

	beforeEach(() => {
		if (component) {
			component.dispose();
		}

		component = new SortableList({
			container: document.body,
			sources: '.target',
			targets: '.target'
		});
	});

	it('should instantiate', () => {
		expect(component).toBeTruthy();
	});
});