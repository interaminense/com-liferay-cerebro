import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {Map} from 'immutable';

import ListGroup from 'shared/components/list-group';
import Checkbox from 'shared/components/Checkbox';

class SelectItem extends Component {
	@autobind
	handleClick() {
		const {checked, id, onSelect} = this.props;

		onSelect(id, !checked);
	}

	render() {
		const {checked, id, label} = this.props;

		return (
			<ListGroup.Item
				elementClasses={checked ? 'active' : ''}
				flex
				key={id}
				onClick={this.handleClick}
			>
				<ListGroup.ItemField>
					<Checkbox checked={checked} />
				</ListGroup.ItemField>

				<ListGroup.ItemField expand>{label}</ListGroup.ItemField>
			</ListGroup.Item>
		);
	}
}

SelectItem.PROPS = {
	checked: Config.bool(),
	id: Config.oneOfType([Config.string(), Config.number()]),
	label: Config.string(),
	onSelect: Config.func()
};

class SelectItemsList extends Component {
	render() {
		const {selectedItemsIMap, items, onSelect} = this.props;

		return (
			<ListGroup>
				{items.map(({id, name}) => (
					<SelectItem
						checked={selectedItemsIMap.get(id)}
						id={id}
						key={id}
						label={name}
						onSelect={onSelect}
					/>
				))}
			</ListGroup>
		);
	}
}

SelectItemsList.PROPS = {
	items: Config.array(),
	onSelect: Config.func(),
	selectedItemsIMap: Config.instanceOf(Map).value(Map())
};

export default SelectItemsList;