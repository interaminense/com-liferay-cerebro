import Constants from 'shared/util/constants';

const SPLIT_REGEX = /({\d+})/g;

export function sub(langKey, args) {
	const keyArray = langKey.split(SPLIT_REGEX).filter(val => val.length !== 0);

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];

		const indexKey = `{${i}}`;

		let argIndex = keyArray.indexOf(indexKey);

		while (argIndex >= 0) {
			keyArray.splice(argIndex, 1, arg);

			argIndex = keyArray.indexOf(indexKey);
		}
	}

	return keyArray;
}

const ENTITY_LANG_MAP = {
	account: Liferay.Language.get('accounts'),
	accountsSegment: Liferay.Language.get('segments'),
	individual: Liferay.Language.get('individuals')
};

export function getTypeLangKey(type) {
	return ENTITY_LANG_MAP[type];
}