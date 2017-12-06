import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {Map} from 'immutable';

import SelectItemsList from 'shared/components/SelectItemsList';

const ITEMS = [
	{
		id: 1,
		name: 'Portland'
	},
	{
		id: 2,
		name: 'San Diego'
	},
	{
		id: 3,
		name: 'Seattle'
	}
];

class SelectItemsListKit extends Component {
	@autobind
	handleSelect(id, val) {
		this.state.selectedItemsIMap = this.state.selectedItemsIMap.set(
			id,
			val
		);
	}

	render() {
		return (
			<div>
				<SelectItemsList
					items={ITEMS}
					onSelect={this.handleSelect}
					selectedItemsIMap={this.state.selectedItemsIMap}
				/>
			</div>
		);
	}
}

SelectItemsListKit.STATE = {
	selectedItemsIMap: Config.value(Map())
};

export default SelectItemsListKit;