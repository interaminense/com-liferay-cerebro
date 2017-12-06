import Component from 'metal-jsx';

import SelectItemsModal from 'shared/components/SelectItemsModal';

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

class SelectItemsModalKit extends Component {
	handleSubmit(val) {
		alert(JSON.stringify(val));
	}

	dataFn() {
		return Promise.resolve();
	}

	render() {
		return (
			<div>
				<SelectItemsModal
					dataSourceFn={this.dataFn}
					items={ITEMS}
					onSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default SelectItemsModalKit;