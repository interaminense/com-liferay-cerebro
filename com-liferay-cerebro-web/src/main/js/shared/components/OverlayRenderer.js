import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import dom from 'metal-dom';
import {Align} from 'metal-position';
import {connect} from 'metal-redux';
import {noop} from 'lodash';
import {OrderedMap} from 'immutable';

import Card from 'shared/components/Card';
import overlayRegistry from 'shared/util/overlay-registry';

const OVERLAY_CONTAINER_CLASS = 'overlay-container-root';

class OverlayContainer extends Component {
	getChildContext() {
		const {id, onMouseEnter, onMouseLeave, parentContext} = this.props;

		return {
			overlay: {
				onMouseEnter,
				onMouseLeave,
				parentId: id
			},
			...parentContext
		};
	}

	render() {
		const {children, id, onMouseEnter, onMouseLeave} = this.props;

		return (
			<Card
				data-overlayid={id}
				elementClasses={OVERLAY_CONTAINER_CLASS}
				id={`overlay${id}Container`}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				{children[0]}
			</Card>
		);
	}
}

OverlayContainer.PROPS = {
	id: Config.string().required(),
	onMouseEnter: Config.func().required(),
	onMouseLeave: Config.func().required(),
	parentContext: Config.object().required()
};

class OverlayRenderer extends Component {
	rendered() {
		this.alignOverlays();

		this.toggleBodyListener();
	}

	alignOverlays() {
		this.props.overlaysIOMap.valueSeq().forEach((overlayIMap, i) => {
			const target = document.getElementById(
				`overlay${overlayIMap.get('id')}`
			);

			if (target) {
				const node = this.element.childNodes[i];

				const position = Align.align(
					node,
					target,
					overlayIMap.get('alignment'),
					!overlayIMap.get('forceAlignment')
				);

				this.setOffset(node, position, overlayIMap.get('offset'));
			}
		});
	}

	@autobind
	handleBodyClick(event) {
		const {overlaysIOMap} = this.props;

		const containerNode = dom.closest(
			event.target,
			`.${OVERLAY_CONTAINER_CLASS}`
		);

		const clicked = new Set();

		if (containerNode) {
			let id = containerNode.dataset.overlayid;
			let overlayIMap;

			while ((overlayIMap = overlaysIOMap.get(id))) {
				clicked.add(overlayIMap.get('id'));

				id = overlayIMap.get('parentId');
			}
		}

		overlaysIOMap.forEach(overlayIMap => {
			if (!clicked.has(overlayIMap.get('id'))) {
				overlayIMap.get('onOutsideClick', noop)(event);
			}
		});
	}

	renderOverlay(overlayIMap) {
		const id = overlayIMap.get('id');

		return (
			<OverlayContainer
				elementClasses={overlayIMap.get('containerClass', '')}
				id={id}
				key={id}
				onMouseEnter={overlayIMap.get('onMouseEnter')}
				onMouseLeave={overlayIMap.get('onMouseLeave')}
				parentContext={overlayIMap.get('context')}
			>
				{overlayRegistry.get(id)}
			</OverlayContainer>
		);
	}

	setOffset(node, position, offset) {
		switch (position) {
			case Align.BottomCenter:
			case Align.BottomLeft:
			case Align.BottomRight:
				node.style.transform = `translateY(${offset}px)`;
				break;
			case Align.LeftCenter:
				node.style.transform = `translateX(-${offset}px)`;
				break;
			case Align.RightCenter:
				node.style.transform = `translateX(${offset}px)`;
				break;
			case Align.TopCenter:
			case Align.TopLeft:
			case Align.TopRight:
				node.style.transform = `translateY(-${offset}px)`;
		}
	}

	toggleBodyListener() {
		const active = !this.props.overlaysIOMap.isEmpty();

		if (active && !this._bodyHandler) {
			this._bodyHandler = dom.on(
				document.body,
				'mousedown',
				this.handleBodyClick
			);
		} else if (!active && this._bodyHandler) {
			this._bodyHandler.removeListener();

			this._bodyHandler = null;
		}
	}

	render() {
		const {overlaysIOMap} = this.props;

		return (
			<div class="overlay-renderer-root">
				{overlaysIOMap.map(this.renderOverlay).toArray()}
			</div>
		);
	}
}

const STORE = {
	overlaysIOMap: Config.instanceOf(OrderedMap).required()
};

OverlayRenderer.PROPS = {
	...STORE
};

export default connect(state => ({
	overlaysIOMap: state.get('overlays', OrderedMap())
}))(OverlayRenderer);