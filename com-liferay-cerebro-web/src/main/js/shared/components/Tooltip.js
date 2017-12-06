import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import dom from 'metal-dom';
import getCN from 'classnames';
import Transitions from 'metal-css-transitions';
import {Align} from 'metal-position';
import {EventHandler} from 'metal-events';

const ALIGNMENTS = ['bottom', 'left', 'right', 'top'];

const ALIGNMENTS_MAP = {
	bottom: Align.Bottom,
	left: Align.Left,
	right: Align.Right,
	top: Align.Top
};

class Tooltip extends Component {
	attached() {
		window.addEventListener('resize', this.alignOverlay);
		window.addEventListener('scroll', this.alignOverlay);
	}

	detached() {
		window.removeEventListener('resize', this.alignOverlay);
		window.removeEventListener('scroll', this.alignOverlay);
	}

	rendered() {
		this.alignOverlay();
	}

	@autobind
	alignOverlay() {
		const {align, delegateTarget} = this.props;

		Align.align(this.element, delegateTarget, ALIGNMENTS_MAP[align]);
	}

	render() {
		const {align, message} = this.props;

		const classes = getCN('show', 'tooltip', 'tooltip-root', {
			[`bs-tooltip-${align}`]: align
		});

		return (
			<div {...this.otherProps()} class={classes} role="tooltip">
				<div class="arrow" />

				<div class="tooltip-inner">{message}</div>
			</div>
		);
	}
}

Tooltip.PROPS = {
	align: Config.oneOf(ALIGNMENTS).value(ALIGNMENTS[0]),
	delegateTarget: Config.object(),
	message: Config.string()
};

class TooltipBase extends Component {
	created() {
		this._eventHandler = new EventHandler();
	}

	attached() {
		this.setTriggers();
	}

	detached() {
		if (this._delay) {
			clearTimeout(this._delay);
		}

		this._eventHandler.removeAllListeners();
	}

	@autobind
	handleHide({delegateTarget}) {
		const dataTitle =
			delegateTarget && delegateTarget.getAttribute('data-title');

		if (dataTitle) {
			delegateTarget.removeEventListener('click', this.handleHide);

			delegateTarget.setAttribute('title', dataTitle);

			delegateTarget.removeAttribute('data-title');

			if (this.state.show) {
				this.state.show = false;
			}
		} else {
			this.state.show = false;
		}

		clearTimeout(this._delay);
	}

	@autobind
	handleShow({delegateTarget}) {
		const align = delegateTarget.getAttribute('data-tooltip-align');

		delegateTarget.addEventListener('click', this.handleHide);

		const message = delegateTarget.getAttribute('title');

		if (message) {
			this.setState({
				align: align ? align : ALIGNMENTS[0],
				delegateTarget,
				message
			});

			delegateTarget.setAttribute('data-title', message);
			delegateTarget.removeAttribute('title');

			if (delegateTarget.hasAttribute('data-tooltip')) {
				this._delay = setTimeout(() => {
					this.state.show = true;
				}, 600);
			}
		}
	}

	setTriggers() {
		this._eventHandler.removeAllListeners();

		this._eventHandler.add(
			dom.delegate(document, 'mouseenter', '[title]', this.handleShow),
			dom.delegate(
				document,
				'mouseleave',
				'[data-title]',
				this.handleHide
			)
		);
	}

	render() {
		const {align, delegateTarget, message, show} = this.state;

		return (
			<Transitions name="transition-fade-in-out">
				{show && (
					<Tooltip
						align={align}
						delegateTarget={delegateTarget}
						message={message}
					/>
				)}
			</Transitions>
		);
	}
}

TooltipBase.STATE = {
	align: Config.oneOf(ALIGNMENTS),
	delegateTarget: Config.value({}),
	message: Config.string().value(''),
	show: Config.bool().value(false)
};

TooltipBase.ALIGNMENTS = ALIGNMENTS;

export default TooltipBase;