import moment from 'moment';
import {conformsTo, isNil} from 'lodash';

function isMomentOrNil(value) {
	return isNil(value) || moment.isMoment(value);
}

export function isDateOrRange(value) {
	return isNil(value) || moment.isMoment(value) || isRange(value);
}

export function isInRange(dateOrRange, date) {
	if (moment.isMoment(dateOrRange)) {
		return false;
	}

	const {start, end} = dateOrRange;

	return start && date.isAfter(start) && (end && date.isBefore(end));
}

export function isRange(value) {
	return conformsTo(value, {
		end: isMomentOrNil,
		start: isMomentOrNil
	});
}

export function updateRange(range, date) {
	if (!range.start) {
		return {
			...range,
			start: date
		};
	}

	if (range.start && !range.end) {
		if (date.isSameOrAfter(range.start)) {
			return {
				...range,
				end: date
			};
		} else {
			return {
				end: range.start,
				start: date
			};
		}
	}

	if (date.isSame(range.start) && date.isSame(range.end)) {
		return range;
	}

	return {
		end: null,
		start: date
	};
}