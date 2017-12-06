import Component from 'metal-jsx';

import * as Data from 'test/data';
import Row from '../components/Row';
import mockStore from 'test/mock-store';

const store = mockStore();

const SEED = 0;

const entity = Data.mockIndividual(SEED);

const CARD_DATA = {
	contactsEntityResults: {
		items: [
			Data.mockSegment(0, {total: 123}),
			Data.mockSegment(1, {total: 123}),
			Data.mockSegment(3, {total: 123}),
			Data.mockSegment(4, {total: 123}),
			Data.mockSegment(5, {total: 123})
		],
		total: 120
	}
};

class SegmentMembershipCard extends Component {
	render() {
		return (
			<div>
				<Row />

				<Row />

				<Row />
			</div>
		);
	}
}

export default SegmentMembershipCard;