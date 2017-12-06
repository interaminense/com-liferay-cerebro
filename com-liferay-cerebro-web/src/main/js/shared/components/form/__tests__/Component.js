import Component from '../Component';

describe('Component', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should return name', () => {
		component = new Component({name: 'foo'});

		expect(component.getFormElementName()).toEqual('foo');
	});

	it('should return value', () => {
		component = new Component({name: 'foo'});

		component.state.value = 'foo';

		expect(component.getFormElementValue()).toEqual('foo');
	});

	it('should return a processed value', () => {
		component = new Component({
			name: 'foo',
			processValue: item => item * 2
		});

		component.state.value = 2;

		expect(component.getFormElementValue()).toEqual(4);
	});
});