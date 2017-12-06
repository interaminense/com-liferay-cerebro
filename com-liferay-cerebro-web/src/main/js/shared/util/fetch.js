import Ajax from 'metal-ajax';
import {isUndefined} from 'lodash';
import {MultiMap} from 'metal-structs';

export default function fetch(requestURL, config = {}) {
	const {body, data = {}, headers = {}, method, timeout} = config;

	return Ajax.request(
		requestURL,
		method,
		body,
		MultiMap.fromObject(headers),
		MultiMap.fromObject(data),
		timeout,
		false,
		true
	)
		.then(({response, status}) => {
			if (status !== 200) {
				throw new Error('Request error');
			}

			return JSON.parse(response);
		})
		.then(response => {
			const {data, message, status} = response;

			let retVal = response;

			if (status && (data || !isUndefined(message))) {
				if (status !== 200) {
					throw new Error(message);
				}

				retVal = data || message;
			}

			return retVal;
		});
}