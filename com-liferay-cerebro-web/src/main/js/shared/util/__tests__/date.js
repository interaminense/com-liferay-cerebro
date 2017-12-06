import {toUnix} from '../date';

describe('date', () => {
	describe('toUnix', () => {
		it('should convert a date string to a unix timestamp', () => {
			const date = '1970-1-1';

			expect(toUnix(date)).toBe(28800000);
		});

		it('should return null if date is invalid', () => {
			expect(toUnix('')).toBe(null);
			expect(toUnix('abc')).toBe(null);
		});
	});
});