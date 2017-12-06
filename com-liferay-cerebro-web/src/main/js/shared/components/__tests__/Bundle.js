import Component from 'metal-jsx';
import Promise from 'metal-promise';

import bundle from '../Bundle';

describe('Bundle', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	class TestComponent extends Component {
		render() {
			return <h1>{'Test Component'}</h1>;
		}
	}

	it('should return a new component', () => {
		const BundledComponent = bundle(() => {
			return Promise.resolve({
				default: TestComponent
			});
		});

		expect(BundledComponent).toBeInstanceOf(Function);
	});

	it('should render a component returned from an import promise', () => {
		const BundledComponent = bundle(() => {
			return Promise.resolve({
				default: TestComponent
			});
		});

		component = new BundledComponent();

		expect(component.element).toBeNull();

		jest.runAllTimers();

		expect(component).toMatchSnapshot();
	});

	it('should statically cache the component on the new class after load', () => {
		const BundledComponent = bundle(() => {
			return Promise.resolve({
				default: TestComponent
			});
		});

		component = new BundledComponent();

		expect(component.element).toBeNull();

		jest.runAllTimers();

		component.dispose();

		jest.runAllTimers();

		component = new BundledComponent();

		expect(component.element).not.toBeNull();
	});
});