import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {noop} from 'lodash';

import Modal from './modal';
import Button from './Button';

class TestModal extends Component {
	@autobind
	handleClose() {
		this.props.onClose();
	}

	render() {
		return (
			<Modal {...this.otherProps()}>
				<Modal.Header
					onClose={this.handleClose}
					title={this.props.title}
				/>

				<Modal.Body inlineScroller>
					<h4>{'Modal Body'}</h4>
				</Modal.Body>

				<Modal.Footer>
					<Button>{'Submit'}</Button>
					<Button onClick={this.handleClose}>{'Cancel'}</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

TestModal.PROPS = {
	onClose: Config.func().value(noop),
	title: Config.string().value('Modal')
};

export default TestModal;