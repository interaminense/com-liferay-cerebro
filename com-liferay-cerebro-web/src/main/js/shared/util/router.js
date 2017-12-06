import Router from 'metal-router';
import Uri from 'metal-uri';
import {invert} from 'lodash';

import Constants from '../util/constants';

const {
	account,
	accountsSegment,
	individual,
	individualsSegment
} = Constants.entityTypes;

export const ACCOUNTS = 'accounts';
export const INDIVIDUALS = 'individuals';
export const SEGMENTS = 'segments';

const ROUTE_TO_TYPE_MAP = {
	[ACCOUNTS]: account,
	[INDIVIDUALS]: individual,
	[SEGMENTS]: accountsSegment
};

const TYPE_TO_ROUTE_MAP = {
	...invert(ROUTE_TO_TYPE_MAP),
	[individualsSegment]: SEGMENTS
};

export function getType(routeName) {
	return ROUTE_TO_TYPE_MAP[routeName];
}

export function getRouteName(type) {
	return TYPE_TO_ROUTE_MAP[type];
}

export function setUriQueryValue(href, name, value) {
	const uri = new Uri(href);

	uri.setParameterValue(name, value);

	return uri.toString();
}

export function removePageParam(newPath, currentUrl = window.location.href) {
	const uri = new Uri(currentUrl);

	if (newPath) {
		uri.setPathname(newPath);
	}

	uri.removeParameter('page');

	return uri.toString();
}

const router = Router.router();

export function navigate(...args) {
	router.navigate(...args);
}