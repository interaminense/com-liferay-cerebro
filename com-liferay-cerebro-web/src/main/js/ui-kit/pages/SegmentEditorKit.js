import Component from 'metal-jsx';
import {times} from 'lodash';

import * as Data from 'test/data';
import Row from '../components/Row';

const CRITERIAS = times(3, i => Data.mockCriteria(i + 1));

const WiderRow = ({children}) => (
	<Row style={{maxWidth: '300px'}}>{children}</Row>
);

class SegmentEditorKit extends Component {
	render() {
		return (
			<div>
				<WiderRow />

				<WiderRow />
			</div>
		);
	}
}

export default SegmentEditorKit;