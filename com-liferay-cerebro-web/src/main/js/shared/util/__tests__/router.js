jest.mock('metal-router');

import Constants from '../constants';
import Router from 'metal-router';

import {
	ACCOUNTS,
	getRouteName,
	getType,
	navigate,
	removePageParam,
	SEGMENTS,
	setUriQueryValue
} from '../router';

describe('setUriQueryValue', () => {
	it('should add query to url and return as a string', () => {
		const url = 'http://www.liferay.com';

		expect(setUriQueryValue(url, 'foo', 'bar')).toBe(`${url}/?foo=bar`);
	});
});

describe('getType', () => {
	it('should return type for a given route name', () => {
		expect(getType(ACCOUNTS)).toBe(Constants.entityTypes.account);
	});
});

describe('getRouteName', () => {
	it('should return route name for a given type', () => {
		expect(getRouteName(Constants.entityTypes.account)).toBe(ACCOUNTS);
	});

	it('should return route name for the segment types', () => {
		expect(getRouteName(Constants.entityTypes.individualsSegment)).toBe(
			SEGMENTS
		);

		expect(getRouteName(Constants.entityTypes.accountsSegment)).toBe(
			SEGMENTS
		);
	});
});

describe('removePageParam', () => {
	it('should remove page query string', () => {
		const url = 'http://www.liferay.com/';

		expect(removePageParam(null, `${url}?page=3`)).toBe(url);
	});

	it('should remove page query string and set new path', () => {
		const url = 'http://www.liferay.com/';

		expect(removePageParam('/bar', `${url}foo?page=3`)).toBe(`${url}bar`);
	});
});

describe('navigate', () => {
	it("should call Router's navigate method", () => {
		const router = Router.router();

		expect(router.navigate).not.toHaveBeenCalled();

		navigate('foobar.com');

		expect(router.navigate).toHaveBeenCalled();
	});
});