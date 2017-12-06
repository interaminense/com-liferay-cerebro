import Component from 'metal-jsx';

import PaginationBar from 'shared/components/PaginationBar';
import Row from '../components/Row';

class PaginationBarKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<PaginationBar
						href={window.location.pathname}
						page={2}
						selectedDelta={10}
						totalItems={200}
					/>
				</Row>

				<Row>
					<PaginationBar
						href={window.location.pathname}
						page={10}
						selectedDelta={30}
						size="sm"
						totalItems={400}
					/>
				</Row>

				<Row>
					<PaginationBar
						href={window.location.pathname}
						page={19}
						selectedDelta={5}
						size="lg"
						totalItems={200}
					/>
				</Row>
			</div>
		);
	}
}

export default PaginationBarKit;