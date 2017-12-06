import Component from 'metal-jsx';
import {Provider} from 'metal-redux';

import Button from 'shared/components/Button';
import DatePicker from 'shared/components/date-picker';
import mockStore from 'test/mock-store';
import Overlay from 'shared/components/Overlay';
import OverlayRenderer from 'shared/components/OverlayRenderer';
import reducer from 'shared/reducers';
import Row from '../components/Row';

class OverlayKit extends Component {
	created() {
		this._store = mockStore(undefined, reducer);
	}

	render() {
		return (
			<Provider store={this._store}>
				<OverlayRenderer />

				<Row>
					<Overlay>
						<Button>{'Hover Me'}</Button>

						<DatePicker />
					</Overlay>
				</Row>

				<Row>
					<Overlay>
						<Button>{'Nested'}</Button>

						<Overlay>
							<Button>{'Hover Me'}</Button>

							<DatePicker />
						</Overlay>
					</Overlay>
				</Row>
			</Provider>
		);
	}
}

export default OverlayKit;