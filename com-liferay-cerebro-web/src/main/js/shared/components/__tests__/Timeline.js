import Timeline from '../Timeline';

describe('Timeline', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Timeline({
			activeIndex: 1,
			items: [
				{
					title: 'This is a really long title for this step'
				},
				{title: 'Step 2'},
				{title: 'Step 3'},
				{title: 'Step 4'}
			]
		});

		expect(component).toMatchSnapshot();
	});
});