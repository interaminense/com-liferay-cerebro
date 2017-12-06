import Constants from '../constants';
import {getTypeLangKey, sub} from '../lang';

describe('sub', () => {
	it('should return an array', () => {
		const res = sub('hello world', ['']);

		expect(res).toEqual(['hello world']);
	});

	it('should return with a subbed value for {0}', () => {
		const res = sub('hello {0}', ['world']);

		expect(res).toEqual(['hello ', 'world']);
	});

	it('should return with multiple subbed values', () => {
		const res = sub('My name is {0} {1}', ['hello', 'world']);

		expect(res).toEqual(['My name is ', 'hello', ' ', 'world']);
	});
});

describe('getTypeLangKey', () => {
	it('should lang key for account', () => {
		expect(getTypeLangKey(Constants.entityTypes.account)).toBe('accounts');
	});
});