import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import dom from 'metal-dom';
import {Align} from 'metal-position';
import {connect} from 'metal-redux';
import {debounce, get, isNil, noop, uniqueId} from 'lodash';

import overlayRegistry from 'shared/util/overlay-registry';
import {show, hide} from 'shared/actions/overlays';

export const ALIGNMENTS = [
	'topCenter',
	'topRight',
	'rightCenter',
	'bottomRight',
	'bottomCenter',
	'bottomLeft',
	'leftCenter',
	'topLeft'
];

const ALIGNMENTS_MAP = {
	bottomCenter: Align.BottomCenter,
	bottomLeft: Align.BottomLeft,
	bottomRight: Align.BottomRight,
	leftCenter: Align.LeftCenter,
	rightCenter: Align.RightCenter,
	topCenter: Align.TopCenter,
	topLeft: Align.TopLeft,
	topRight: Align.TopRight
};

class Overlay extends Component {
	created() {
		this._id = uniqueId();

		const {hideDelay, showDelay} = this.props;

		this.hide = debounce(() => (this.state.active = false), hideDelay);
		this.show = debounce(() => (this.state.active = true), showDelay);
	}

	detached() {
		if (this._bodyHandler) {
			this._bodyHandler.removeListener();
		}
	}

	rendered() {
		const active = this.getActive();

		if (!active && this._overlayVisible) {
			this._overlayVisible = false;

			this.removeContent();
		} else if (active) {
			this._overlayVisible = true;

			this.renderContent();
		}
	}

	disposed() {
		this.removeContent();
	}

	getActive() {
		const {active} = this.props;

		return !isNil(active) ? active : this.state.active;
	}

	@autobind
	handleMouseEnter() {
		const {overlay} = this.context;

		if (overlay) {
			overlay.onMouseEnter();
		}

		this.hide.cancel();

		this.show();
	}

	@autobind
	handleMouseLeave() {
		const {overlay} = this.context;

		if (overlay) {
			overlay.onMouseLeave();
		}

		this.show.cancel();

		this.hide();
	}

	@autobind
	handleOutsideClick(event) {
		if (!dom.contains(this.element, event.target)) {
			this.props.onOutsideClick();
		}
	}

	removeContent() {
		overlayRegistry.remove(this._id);

		this.props.hide(this._id);
	}

	renderContent() {
		const {
			alignment,
			containerClass,
			forceAlignment,
			offset,
			passedChildren,
			show
		} = this.props;

		overlayRegistry.add(this._id, passedChildren[1]);

		show({
			alignment: ALIGNMENTS_MAP[alignment],
			containerClass,
			context: this.context,
			forceAlignment,
			id: this._id,
			offset,
			onMouseEnter: this.handleMouseEnter,
			onMouseLeave: this.handleMouseLeave,
			onOutsideClick: this.handleOutsideClick,
			parentId: get(this, 'context.overlay.parentId')
		});
	}

	render() {
		const {passedChildren} = this.props;

		const trigger = passedChildren[0];

		trigger.props = {
			...trigger.props,
			active: this.getActive(),
			id: `overlay${this._id}`,
			onMouseEnter: this.handleMouseEnter,
			onMouseLeave: this.handleMouseLeave
		};

		return trigger;
	}
}

const STORE = {
	hide: Config.func().required(),
	show: Config.func().required()
};

Overlay.PROPS = {
	...STORE,
	active: Config.bool(),
	alignment: Config.oneOf(ALIGNMENTS).value('bottomCenter'),
	containerClass: Config.string(),
	forceAlignment: Config.bool().value(false),
	hideDelay: Config.number().value(400),
	offset: Config.number().value(8),
	onOutsideClick: Config.func().value(noop),
	passedChildren: Config.array(),
	showDelay: Config.number().value(400)
};

Overlay.STATE = {
	active: Config.bool().value(false)
};

export {Align} from 'metal-position';

export default connect(
	(state, {children}) => ({
		passedChildren: children
	}),
	{
		hide,
		show
	}
)(Overlay);