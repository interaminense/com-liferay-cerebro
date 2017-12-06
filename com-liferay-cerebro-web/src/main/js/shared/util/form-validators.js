import {map} from 'lodash';
import moment from 'moment';

import {FORMAT} from 'shared/util/date';

const REQUIRED = 'required';

export function checkRequired(config) {
	return config.hasOwnProperty(REQUIRED) && config[REQUIRED];
}

export function assert(valid, message) {
	return {
		message: valid ? '' : message,
		valid
	};
}

const validators = {
	date: value =>
		assert(
			moment(value, FORMAT).isValid(),
			Liferay.Language.get('not-a-valid-date')
		),
	maxLength: (value, maxLength) =>
		assert(
			value.length <= maxLength,
			Liferay.Language.get('exceeds-maximum-length')
		),
	minLength: (value, minLength) =>
		assert(
			value.length >= minLength,
			Liferay.Language.get('does-not-meet-minimum-length-required')
		),
	required: value => assert(!!value, Liferay.Language.get('required'))
};

export default (value, config) => {
	let result = [assert(true)];

	if (value || checkRequired(config)) {
		result = map(config, (arg, name) => validators[name](value, arg));
	}

	return result;
};