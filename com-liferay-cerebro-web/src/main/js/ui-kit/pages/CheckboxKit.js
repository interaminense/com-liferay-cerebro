import Component from 'metal-jsx';

import Checkbox from 'shared/components/Checkbox';
import Item from '../components/Item';
import Row from '../components/Row';

class CheckboxKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<Item>
						<Checkbox />
					</Item>
					<Item>
						<Checkbox checked />
					</Item>
					<Item>
						<Checkbox checked indeterminate />
					</Item>
				</Row>

				<Row>
					<Item>
						<Checkbox label="Checkbox Label" />
					</Item>
					<Item>
						<Checkbox checked />
					</Item>
					<Item>
						<Checkbox checked indeterminate />
					</Item>
				</Row>
			</div>
		);
	}
}

export default CheckboxKit;