import {Map, OrderedMap} from 'immutable';

import mockStore from 'test/mock-store';
import overlayRegistry from 'shared/util/overlay-registry';
import OverlayRenderer from '../OverlayRenderer';

describe('OverlayRenderer', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}

		overlayRegistry.clear();
	});

	it('should render', () => {
		component = new OverlayRenderer({
			store: mockStore()
		});

		expect(component).toMatchSnapshot();
	});

	it('should render overlays from the store', () => {
		overlayRegistry.add('1', <div>{'foobar'}</div>);

		component = new OverlayRenderer({
			store: mockStore(
				Map({
					overlays: OrderedMap({
						1: Map({
							context: {},
							id: '1',
							onMouseEnter: jest.fn(),
							onMouseLeave: jest.fn()
						})
					})
				})
			)
		});

		expect(component).toMatchSnapshot();
	});

	it('should render multiple overlays from the store', () => {
		overlayRegistry.add('1', <div>{'overlay1'}</div>);
		overlayRegistry.add('2', <div>{'overlay2'}</div>);

		component = new OverlayRenderer({
			store: mockStore(
				Map({
					overlays: OrderedMap({
						1: Map({
							content: <div>{'overlay1'}</div>,
							context: {},
							id: '1',
							onMouseEnter: jest.fn(),
							onMouseLeave: jest.fn()
						}),
						2: Map({
							content: <div>{'overlay2'}</div>,
							context: {},
							id: '2',
							onMouseEnter: jest.fn(),
							onMouseLeave: jest.fn()
						})
					})
				})
			)
		});

		expect(component).toMatchSnapshot();
	});
});