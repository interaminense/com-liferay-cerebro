jest.mock('metal-ajax');

import Ajax from 'metal-ajax';
import Promise from 'metal-promise';

import fetch from '../fetch';

describe('fetch', () => {
	it('should return a Promise', () => {
		Ajax.request.mockReturnValue(Promise.resolve(1));

		const result = fetch().catch(jest.fn());

		expect(result instanceof Promise).toBe(true);

		jest.runAllTimers();
	});

	it('should resolve with the parsed response', done => {
		const value = 25;

		Ajax.request.mockReturnValue(
			Promise.resolve({
				response: `{
								"data": {
									"a": ${value}
								},
								"status": 200
							}`,
				status: 200
			})
		);

		fetch().then(data => {
			expect(data.a).toBe(value);

			done();
		});

		jest.runAllTimers();
	});

	it('should reject if the response cannot be parsed', done => {
		Ajax.request.mockReturnValue(
			Promise.resolve({
				response: '{test:}',
				status: 200
			})
		);

		fetch('').catch(error => {
			expect(error instanceof SyntaxError).toBe(true);

			done();
		});

		jest.runAllTimers();
	});

	it('should reject on a non-200 xhr status', done => {
		Ajax.request.mockReturnValue(
			Promise.resolve({
				status: 500
			})
		);

		fetch().catch(error => {
			expect(error instanceof Error).toBe(true);

			done();
		});

		jest.runAllTimers();
	});

	it('should reject if the response contains a non-200 status', done => {
		const message = 'Test Error Message';

		Ajax.request.mockReturnValue(
			Promise.resolve({
				response: `{
								"message": "${message}",
								"status": 500
							}`,
				status: 200
			})
		);

		fetch().catch(error => {
			expect(error.message).toBe(message);

			done();
		});

		jest.runAllTimers();
	});

	it('should handle message when it is an empty string', done => {
		Ajax.request.mockReturnValue(
			Promise.resolve({
				response: `{
								"message": "",
								"status": 200
							}`,
				status: 200
			})
		);

		fetch().then(message => {
			expect(message).toBe('');

			done();
		});

		jest.runAllTimers();
	});
});