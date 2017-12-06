export const actionTypes = {
	HIDE_OVERLAY: 'HIDE_OVERLAY',
	SHOW_OVERLAY: 'SHOW_OVERLAY'
};

export function hide(id) {
	return {
		payload: {
			id
		},
		type: actionTypes.HIDE_OVERLAY
	};
}

export function show(options) {
	const {
		alignment,
		containerClass,
		context,
		forceAlignment,
		id,
		offset,
		onMouseEnter,
		onMouseLeave,
		onOutsideClick,
		parentId
	} = options;

	return {
		payload: {
			alignment,
			containerClass,
			context,
			forceAlignment,
			id,
			offset,
			onMouseEnter,
			onMouseLeave,
			onOutsideClick,
			parentId
		},
		type: actionTypes.SHOW_OVERLAY
	};
}