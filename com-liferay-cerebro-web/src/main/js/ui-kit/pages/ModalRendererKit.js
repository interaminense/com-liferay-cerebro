import autobind from 'autobind-decorator';
import Component from 'metal-jsx';
import {Provider} from 'metal-redux';
import {times} from 'lodash';

import * as modalActions from 'shared/actions/modals';
import Button from 'shared/components/Button';
import mockStore from 'test/mock-store';
import ModalRenderer from 'shared/components/ModalRenderer';
import Row from '../components/Row';

class ModalRendererKit extends Component {
	created() {
		this._store = mockStore();
	}

	@autobind
	handleOpen() {
		this._store.dispatch(
			modalActions.open(modalActions.modalTypes.TEST, {
				onClose: this.handleClose
			})
		);
	}

	@autobind
	handleOpenThree() {
		times(3, i =>
			this._store.dispatch(
				modalActions.open(modalActions.modalTypes.TEST, {
					onClose: this.handleClose,
					title: `Modal Number #${i + 1}`
				})
			)
		);
	}

	@autobind
	handleClose() {
		this._store.dispatch(modalActions.close());
	}

	render() {
		return (
			<Provider store={this._store}>
				<ModalRenderer />

				<Row>
					<Button display="primary" onClick={this.handleOpen}>
						{'Open Modal'}
					</Button>
				</Row>

				<Row>
					<Button display="primary" onClick={this.handleOpenThree}>
						{'Open Three Modals'}
					</Button>
				</Row>
			</Provider>
		);
	}
}

export default ModalRendererKit;