import Component from 'metal-jsx';
import {Provider} from 'metal-redux';

import Constants from 'shared/util/constants';
import mockStore from 'test/mock-store';
import ModalRenderer from 'shared/components/ModalRenderer';

const store = mockStore();

class EditCardModalKit extends Component {
	render() {
		return (
			<div>
				<Provider store={store}>
					<ModalRenderer />
				</Provider>
			</div>
		);
	}
}

export default EditCardModalKit;