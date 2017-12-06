import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import dom from 'metal-dom';
import {connect} from 'metal-redux';
import {List} from 'immutable';

import CreateMappingModal from './CreateMappingModal';
import LoadingModal from './LoadingModal';
import SelectItemsModal from './SelectItemsModal';
import TestModal from './TestModal';
import {close, modalTypes} from '../actions/modals';

const BODY_CLASSNAME = 'modal-open';

const COMPONENT_MAP = {
	[modalTypes.CREATE_MAPPING_MODAL]: CreateMappingModal,
	[modalTypes.LOADING_MODAL]: LoadingModal,
	[modalTypes.SELECT_ITEMS_MODAL]: SelectItemsModal,
	[modalTypes.TEST]: TestModal
};

function toggleBodyModalOpen(open = true) {
	if (open) {
		document.body.classList.add(BODY_CLASSNAME);
	} else {
		document.body.classList.remove(BODY_CLASSNAME);
	}
}

class ModalRenderer extends Component {
	rendered() {
		toggleBodyModalOpen(!!this.getCurrentModal());
	}

	disposed() {
		toggleBodyModalOpen(false);
	}

	getCurrentModal() {
		return this.props.modalsIList.last();
	}

	@autobind
	handleClickOutside(event) {
		const currentModalIMap = this.getCurrentModal();

		if (
			currentModalIMap.get('closeOnBlur', true) &&
			dom.match(event.target, '.modal-container')
		) {
			this.props.close();
		}
	}

	render() {
		return (
			<div class="modal-renderer-root">
				{this.props.modalsIList
					.map((modalIMap, i) => {
						const ModalComponent =
							COMPONENT_MAP[modalIMap.get('type')];

						return (
							<div
								class="modal-container d-block fade modal show"
								key={i}
								onClick={this.handleClickOutside}
								role="dialog"
							>
								<ModalComponent
									{...modalIMap.get('props').toJS()}
								/>
							</div>
						);
					})
					.toJS()}

				{!!this.getCurrentModal() && (
					<div class="modal-backdrop fade show" />
				)}
			</div>
		);
	}
}

const STORE = {
	close: Config.func().required(),
	modalsIList: Config.instanceOf(List).required()
};

ModalRenderer.PROPS = {
	...STORE
};

export default connect(
	state => ({
		modalsIList: state.get('modals', List())
	}),
	{close}
)(ModalRenderer);