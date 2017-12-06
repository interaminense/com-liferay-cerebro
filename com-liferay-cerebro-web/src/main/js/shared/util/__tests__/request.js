jest.mock('../fetch');

import Promise from 'metal-promise';

import fetch from '../fetch';

import request, {
	addParams,
	getFormData,
	serializeQueryString,
	stringifyValues
} from '../request';

describe('addParams', () => {
	it('should correctly append query string params', () => {
		const result = addParams('http://www.test.com', {
			name: 'joe',
			title: 'blogger'
		});

		expect(result).toContain('joe');
		expect(result).toContain('blogger');
	});

	it('should use correct param separator', () => {
		const result = addParams('http://www.test.com?parameter=1', {
			name: 'joe'
		});

		expect(result.split('?').length - 1).toBe(1);
	});
});

describe('getFormData', () => {
	it('should return a FormData object', () => {
		const formData = getFormData({
			name: 'test'
		});

		expect(formData instanceof FormData).toBe(true);
	});
});

describe('serializeQueryString', () => {
	it('should contain params', () => {
		const queryString = serializeQueryString(
			{
				name: 'test'
			},
			true
		);

		expect(queryString).toContain('name');
	});

	it('should contain params', () => {
		const queryString = serializeQueryString({
			name: 'joe'
		});

		expect(queryString).toContain('joe');
	});
});

describe('request', () => {
	beforeEach(() => {
		fetch.mockClear();
	});

	it('should return a Promise', () => {
		fetch.mockReturnValue(Promise.resolve(1));

		const result = request({}).catch(jest.fn());

		expect(result instanceof Promise).toBe(true);

		jest.runAllTimers();
	});

	it('should correctly create request URL', () => {
		request({
			method: 'GET',
			path: 'contacts/contacts_mapping/search'
		});

		const requestURL = fetch.mock.calls[0][0];

		expect(requestURL).toContain('contacts_mapping');
		expect(requestURL).toContain('search');
	});

	it('should set data attribute if method is GET', () => {
		request({
			data: {
				a: 2
			},
			method: 'GET'
		});

		const config = fetch.mock.calls[0][1];

		expect(config.data.a).toBe(2);
	});
});

describe('stringifyValues', () => {
	beforeEach(() => {
		fetch.mockClear();
	});

	it('should serialize instances of objects', () => {
		const arr = ['foo'];
		const obj = {foo: 'bar'};

		const val = stringifyValues({
			arr,
			obj
		});

		expect(val.arr).toBe(JSON.stringify(arr));
		expect(val.obj).toBe(JSON.stringify(obj));
	});
});