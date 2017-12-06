import moment from 'moment';

export const FORMAT = 'YYYY-MM-DD';

export function toUnix(stringOrMoment) {
	return moment(stringOrMoment, FORMAT).unix() * 1000 || null;
}