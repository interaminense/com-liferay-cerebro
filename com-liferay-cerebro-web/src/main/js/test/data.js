import {clamp, find, times} from 'lodash';

import Constants from 'shared/util/constants';

const {criterionOperators, clauseOperators} = Constants;

export function mockIndividual(seed = 0, properties) {
	return {
		colorId: seed,
		id: seed,
		name: 'Foo Bar',
		portraitURL: '/path/to/portrait.png',
		properties: {
			firstName: 'Foo',
			jobTitle: 'Developer',
			lastName: 'Bar',
			salary: '50,000',
			title: 'Developer',
			...properties
		},
		type: Constants.entityTypes.individual
	};
}

export function mockSegment(seed = 0, properties = {}) {
	return {
		id: seed,
		name: 'Seattle',
		properties,
		type: Constants.entityTypes.accountsSegment
	};
}

export function mockCardTemplate(seed = 0) {
	return {
		id: seed,
		layoutId: seed,
		name: '',
		type: null
	};
}

function mockMappingtemplate(seed, prefix, name, suffix) {
	return {
		contactsMappingId: seed,
		contactsMappingName: name,
		prefix,
		suffix
	};
}

export function mockProfileCardTemplate(seed = 0, data = {}) {
	return {
		...mockCardTemplate(seed),
		contactsMappingTemplates: [
			mockMappingtemplate(seed, 'Salary', 'salary'),
			mockMappingtemplate(seed + 1, 'Title:', 'title')
		],
		layoutType:
			Constants.contactsCardTemplateTypes.profileCardLayoutTypes.vertical,
		name: `Profile Card ${seed}`,
		type: Constants.contactsCardTemplateTypes.cardTypes.profile,
		...data
	};
}

export function mockInfoCardTemplate(seed = 0, data = {}) {
	return {
		...mockCardTemplate(seed),
		contactsMappingTemplates: [
			mockMappingtemplate(seed, 'First Name:', 'firstName'),
			mockMappingtemplate(seed + 1, 'Last Name:', 'lastName'),
			mockMappingtemplate(seed + 2, 'Job Title:', 'jobTitle')
		],
		name: `Info Card ${seed}`,
		type: Constants.contactsCardTemplateTypes.cardTypes.info,
		...data
	};
}

export function mockSegmentMembershipCardTemplate(seed = 0, data = {}) {
	return {
		...mockCardTemplate(seed),
		name: `Segment Membership Card ${seed}`,
		type: Constants.contactsCardTemplateTypes.cardTypes.segmentMembership,
		...data
	};
}

const MAPPING_TYPES = ['boolean', 'date', 'number', 'string'];

export function mockClause(seed = 0, data = {}) {
	const type = MAPPING_TYPES[clamp(seed, 0, MAPPING_TYPES.length - 1)];
	const operator = find(clauseOperators, ({supportedTypes}) =>
		supportedTypes.includes(type)
	);

	return {
		contactsMapping: {
			name: `mapping${seed}`,
			type
		},
		id: seed,
		operatorId: operator.id,
		values: times(operator.labels.length, i => `value${i}`),
		...data
	};
}

export function mockCriteria(seed = 0, data = {}) {
	return {
		childContactsCriterion: times(clamp(seed, 1, 3), i => mockClause(i)),
		id: seed,
		name: `Criteria${seed}`,
		operatorId: criterionOperators.operatorAnd,
		...data
	};
}