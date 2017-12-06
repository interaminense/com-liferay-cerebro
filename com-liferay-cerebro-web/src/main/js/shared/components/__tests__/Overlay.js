jest.mock('shared/actions/overlays');
jest.mock('lodash');

import Component, {Config} from 'metal-jsx';

import * as actions from 'shared/actions/overlays';
import mockStore, {renderWithStore} from 'test/mock-store';
import Overlay from '../Overlay';

describe('Overlay', () => {
	let component;

	actions.hide.mockReturnValue({type: 'NOOP'});
	actions.show.mockReturnValue({type: 'NOOP'});

	afterEach(() => {
		if (component) {
			component.dispose();
		}

		jest.useFakeTimers();
	});

	it('should render the trigger', () => {
		component = new Overlay({
			children: [
				<button key="foo">{'trigger'}</button>,
				<div key="bar">{'content'}</div>
			],
			store: mockStore()
		});

		expect(component).toMatchSnapshot();
	});

	it.skip('should call show on mouse enter', done => {
		jest.useRealTimers();

		component = new Overlay({
			children: [
				<button key="foo">{'trigger'}</button>,
				<div key="bar">{'content'}</div>
			],
			showDelay: 5,
			store: mockStore()
		});

		expect(actions.show).not.toHaveBeenCalled();

		component.refs.child.handleMouseEnter();

		setTimeout(() => {
			expect(actions.show).toHaveBeenCalled();

			done();
		}, 30);
	});

	it.skip('should call hide on mouse leave', done => {
		jest.useRealTimers();

		component = new Overlay({
			children: [
				<button key="foo">{'trigger'}</button>,
				<div key="bar">{'content'}</div>
			],
			showDelay: 5,
			store: mockStore()
		});

		actions.hide.mockClear();

		expect(actions.hide).not.toHaveBeenCalled();

		component.refs.child.handleMouseLeave();

		setTimeout(() => {
			expect(actions.hide).toHaveBeenCalled();

			done();
		}, 30);
	});

	it('should call render content if the overlay content re-renders', () => {
		class TestComponent extends Component {
			render() {
				return (
					<Overlay active>
						<button>{'trigger'}</button>
						<div class="content">{this.props.content}</div>
					</Overlay>
				);
			}
		}

		TestComponent.PROPS = {
			content: Config.string().required()
		};

		component = renderWithStore(TestComponent, {
			content: 'foo'
		});

		expect(actions.show).toHaveBeenCalledTimes(1);

		component.props.content = 'bar';

		jest.runAllTimers();

		expect(actions.show).toHaveBeenCalledTimes(2);
	});
});