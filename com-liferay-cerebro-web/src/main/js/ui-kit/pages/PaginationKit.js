import Component, {Config} from 'metal-jsx';

import Pagination from 'shared/components/Pagination';
import Row from '../components/Row';

class PaginationKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<Pagination
						href={window.location.pathname}
						page={1}
						total={10}
					/>
				</Row>

				<Row>
					<Pagination
						href={window.location.pathname}
						page={28}
						total={30}
					/>
				</Row>

				<Row>
					<Pagination
						href={window.location.pathname}
						page={10}
						total={100}
					/>
				</Row>
			</div>
		);
	}
}

PaginationKit.STATE = {
	page: Config.number().value(1)
};

export default PaginationKit;