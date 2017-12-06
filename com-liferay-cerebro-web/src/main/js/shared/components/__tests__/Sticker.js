import Sticker, {getDisplayForId, hashCode} from '../Sticker';

describe('Sticker', () => {
	let component;

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	it('should render', () => {
		component = new Sticker({
			symbol: 'file'
		});

		expect(component).toMatchSnapshot();
	});
});

describe('getDisplayForId', () => {
	it('should return a display type for a given number or string', () => {
		expect(getDisplayForId(1234)).toBe('success');
		expect(getDisplayForId('foo')).toBe('warning');
	});
});

describe('hashCode', () => {
	it('should return a unique number for a given string', () => {
		expect(hashCode('foo')).toBe(324);
		expect(hashCode('bar')).toBe(309);
		expect(hashCode('baz')).toBe(317);
	});
});