window.analyticsConstants = {
	clauseOperators: {
		0: {
			id: 0,
			labels: ['value'],
			name: 'after',
			supportedTypes: ['date']
		},
		1: {
			id: 1,
			labels: ['value'],
			name: 'before',
			supportedTypes: ['date']
		},
		10: {
			id: 10,
			labels: [],
			name: 'is-not-known',
			supportedTypes: ['boolean', 'date', 'number', 'string']
		},
		2: {
			id: 2,
			labels: ['start-date', 'end-date'],
			name: 'between',
			supportedTypes: ['date']
		},
		3: {
			id: 3,
			labels: ['value'],
			name: 'contains',
			supportedTypes: ['string']
		},
		4: {
			id: 4,
			labels: ['value'],
			name: 'equals',
			supportedTypes: ['boolean', 'date', 'number']
		},
		5: {
			id: 5,
			labels: ['value'],
			name: 'greater-than',
			supportedTypes: ['number']
		},
		6: {
			id: 6,
			labels: [],
			name: 'is-known',
			supportedTypes: ['boolean', 'date', 'number', 'string']
		},
		7: {
			id: 7,
			labels: ['value'],
			name: 'less-than',
			supportedTypes: ['number']
		},
		8: {
			id: 8,
			labels: ['value'],
			name: 'does-not-contain',
			supportedTypes: ['string']
		},
		9: {
			id: 9,
			labels: ['value'],
			name: 'not-equals',
			supportedTypes: []
		}
	},
	contactsCardTemplateTypes: {
		cardTypes: {
			info: 1,
			profile: 0
		},
		profileCardLayoutTypes: {
			horizontal: 0,
			noAvatar: 1,
			vertical: 2
		},
		segmentsMembershipCardOrders: {
			alphabetical: 0,
			numberOfMembers: 1
		}
	},
	criterionOperators: {
		operatorAnd: 11,
		operatorOr: 12
	},
	dataSourceTypes: {
		csv: 'CSV',
		liferayDE: 'LIFERAY'
	},
	entityTypes: {
		account: 0,
		accountsSegment: 1,
		individual: 2
	},
	pagination: {
		deltaValues: [1, 2, 3, 4]
	},
	pathThemeImages: '/images'
};

window.Liferay = {
	authToken: 'auth',
	Language: {
		get: key => key
	}
};