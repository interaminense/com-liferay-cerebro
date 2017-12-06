import Component from 'metal-jsx';

import * as Data from 'test/data';
import Row from '../components/Row';
import mockStore from 'test/mock-store';

const store = mockStore();

class InfoCardKit extends Component {
	render() {
		const entity = Data.mockIndividual();

		return (
			<div>
				<Row />

				<Row />

				<Row />
			</div>
		);
	}
}

export default InfoCardKit;