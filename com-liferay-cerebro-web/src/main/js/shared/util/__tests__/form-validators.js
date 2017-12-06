import validator, {assert, checkRequired} from '../form-validators';

describe('validator', () => {
	it('should check `required` on an object', () => {
		const falsey = checkRequired({required: false});
		const truthy = checkRequired({required: true});

		expect(falsey).toBe(false);
		expect(truthy).toBe(true);
	});

	it('should return a validation object', () => {
		const invalid = assert(false, 'invalid');
		const valid = assert(true, 'valid');

		expect(invalid.valid).toBe(false);
		expect(valid.valid).toBe(true);
	});

	it('should validate required', () => {
		const invalid = validator('', {required: true});
		const valid = validator('test', {required: true});

		expect(invalid[0].valid).toBe(false);
		expect(valid[0].valid).toBe(true);
	});

	it('should validate max length', () => {
		const invalid = validator('aaa', {maxLength: 2});
		const valid = validator('aa', {maxLength: 2});

		expect(invalid[0].valid).toBe(false);
		expect(valid[0].valid).toBe(true);
	});

	it('should validate min length', () => {
		const invalid = validator('a', {minLength: 2});
		const valid = validator('aa', {minLength: 2});

		expect(invalid[0].valid).toBe(false);
		expect(valid[0].valid).toBe(true);
	});

	it('should validate a date string', () => {
		const invalid = validator('a', {date: true});
		const valid = validator('1995-12-25', {date: true});

		expect(invalid[0].valid).toBe(false);
		expect(valid[0].valid).toBe(true);
	});
});