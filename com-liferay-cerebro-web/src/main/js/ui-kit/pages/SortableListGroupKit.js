import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import SortableListGroup from 'shared/components/SortableListGroup';
import Row from '../components/Row';

const ITEMS = [
	{id: 1, name: 'foo'},
	{id: 2, name: 'bar'},
	{id: 3, name: 'baz'}
];

class SortableListGroupKit extends Component {
	@autobind
	handleChange(items) {
		this.state.items = items;
	}

	@autobind
	handleResetItems() {
		this.state.items = ITEMS;
	}

	render() {
		return (
			<div>
				<Row>
					<button onClick={this.handleResetItems}>
						{'reset items'}
					</button>
				</Row>

				<Row>
					<SortableListGroup
						items={this.state.items}
						onChange={this.handleChange}
					/>
				</Row>
			</div>
		);
	}
}

SortableListGroupKit.STATE = {
	items: Config.value(ITEMS)
};

export default SortableListGroupKit;