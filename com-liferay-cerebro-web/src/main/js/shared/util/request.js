import {keys, mapValues} from 'lodash';

import fetch from './fetch';

export function addParams(url, params) {
	const separator = url.includes('?') ? '&' : '?';

	return `${url}${separator}${serializeQueryString(params)}`;
}

export function getFormData(data) {
	const formData = new FormData();

	keys(data).forEach(key => {
		formData.append(key, data[key]);
	});

	return formData;
}

export function serializeQueryString(params) {
	return keys(params)
		.map(
			key =>
				`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
		)
		.join('&');
}

export function stringifyValues(data) {
	return mapValues(
		data,
		value =>
			value instanceof Object && !(value instanceof File)
				? JSON.stringify(value)
				: value
	);
}

export default request => {
	const {data = {}, method, path} = request;

	const requestURL = `/o/faro/${path}`;

	const authData = {
		...stringifyValues(data),
		p_auth: Liferay.authToken
	};

	const config = {method};

	if (method === 'GET') {
		config.data = authData;
	} else {
		config.body = getFormData(authData);
	}

	return fetch(requestURL, config);
};