import 'metal-jsx';
import {OverlayRegistry} from '../overlay-registry';

describe('OverlayRegistry', () => {
	let overlayRegistry;

	beforeEach(() => {
		overlayRegistry = new OverlayRegistry();
	});

	it('should add the content to the registry', () => {
		overlayRegistry.add('23', <div>{'test'}</div>);

		expect(overlayRegistry.get('23')).toBeInstanceOf(Function);
	});

	it('should remove the content from the registry', () => {
		overlayRegistry.add('23', <div>{'test'}</div>);

		expect(overlayRegistry.get('23')).toBeInstanceOf(Function);

		overlayRegistry.remove('23');

		expect(overlayRegistry.get('23')).toBeUndefined();
	});

	it('should clear all overlays from the registry', () => {
		overlayRegistry.add('24', <div>{'foo'}</div>);
		overlayRegistry.add('25', <div>{'bar'}</div>);

		overlayRegistry.clear();

		expect(overlayRegistry.get('24')).toBeUndefined();
		expect(overlayRegistry.get('25')).toBeUndefined();
	});
});