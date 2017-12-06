import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import Icon from './Icon';
import ListGroup from './list-group';
import SortableList from '../util/SortableList';

class SortableListGroupItem extends Component {
	@autobind
	handleRemove() {
		const {id, onRemove} = this.props;

		onRemove(id);
	}

	render() {
		const {name} = this.props;

		return (
			<ListGroup.Item flex>
				<ListGroup.ItemField elementClasses="handle">
					<Icon symbol="bars" />
				</ListGroup.ItemField>

				<ListGroup.ItemField expand>{name}</ListGroup.ItemField>

				<ListGroup.ItemField>
					<Icon
						elementClasses="remove"
						onClick={this.handleRemove}
						symbol="times-circle"
					/>
				</ListGroup.ItemField>
			</ListGroup.Item>
		);
	}
}

SortableListGroupItem.PROPS = {
	id: Config.oneOfType([Config.number(), Config.string()]),
	name: Config.string(),
	onRemove: Config.func()
};

class SortableListGroup extends Component {
	attached() {
		this._sortableList = new SortableList({
			axis: 'y',
			container: this.element,
			items: this.props.items,
			onItemsChange: this.props.onChange,
			sources: '.list-group-item',
			targets: '.list-group-item'
		});
	}

	@autobind
	handleRemove(id) {
		const {idKey, items, onChange} = this.props;

		onChange(items.filter(item => item[idKey] !== id));
	}

	syncItems(items) {
		if (this._sortableList) {
			this._sortableList.items = items;
		}
	}

	render() {
		const {idKey, nameKey} = this.props;

		return (
			<ListGroup elementClasses="sortable-list-group-root">
				{this.props.items.map(item => (
					<SortableListGroupItem
						id={item[idKey]}
						key={item[idKey]}
						name={item[nameKey]}
						onRemove={this.handleRemove}
					/>
				))}
			</ListGroup>
		);
	}
}

SortableListGroup.PROPS = {
	idKey: Config.string().value('id'),
	items: Config.array(),
	nameKey: Config.string().value('name'),
	onChange: Config.func()
};

export default SortableListGroup;