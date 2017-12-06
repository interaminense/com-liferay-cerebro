export const actionTypes = {
	CLOSE_ALL_MODALS: 'CLOSE_ALL_MODALS',
	CLOSE_MODAL: 'CLOSE_MODAL',
	OPEN_MODAL: 'OPEN_MODAL'
};

export const modalTypes = {
	CREATE_MAPPING_MODAL: 'CREATE_MAPPING_MODAL',
	CSV_PREVIEW_MODAL: 'CSV_PREVIEW_MODAL',
	EDIT_CARD_MODAL: 'EDIT_CARD_MODAL',
	LOADING_MODAL: 'LOADING_MODAL',
	MATCH_FIELDS_MODAL: 'MATCH_FIELDS_MODAL',
	SELECT_ITEMS_MODAL: 'SELECT_ITEMS_MODAL',
	TEST: 'TEST'
};

export function close() {
	return {
		type: actionTypes.CLOSE_MODAL
	};
}

export function closeAll() {
	return {
		type: actionTypes.CLOSE_ALL_MODALS
	};
}

export function open(type, props = {}, options = {}) {
	const {closeOnBlur = true} = options;

	return {
		payload: {
			closeOnBlur,
			props,
			type
		},
		type: actionTypes.OPEN_MODAL
	};
}