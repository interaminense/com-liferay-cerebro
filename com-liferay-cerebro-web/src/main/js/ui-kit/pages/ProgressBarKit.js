import Component from 'metal-jsx';

import ProgressBar from 'shared/components/ProgressBar';
import Row from '../components/Row';

class ProgressBarKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<ProgressBar value={0} />
				</Row>

				<Row>
					<ProgressBar value={25} />
				</Row>

				<Row>
					<ProgressBar value={50} />
				</Row>

				<Row>
					<ProgressBar value={75} />
				</Row>

				<Row>
					<ProgressBar complete />
				</Row>
			</div>
		);
	}
}

export default ProgressBarKit;