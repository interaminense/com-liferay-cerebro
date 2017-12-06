import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {times} from 'lodash';

import SearchableSelect from 'shared/components/SearchableSelect';
import Row from '../components/Row';

const items = times(30, i => ({name: `item${i}`, value: i}));

function includes(source, target) {
	return source.toLocaleUpperCase().includes(target.toLocaleUpperCase());
}

class SearchableSelectKit extends Component {
	@autobind
	handleInput(event) {
		this.state.inputValue = event.target.value;
	}

	@autobind
	handleSelect(item) {
		this.state.selectedItem = item;
	}

	render() {
		const {inputValue, selectedItem} = this.state;

		return (
			<div>
				<Row>
					<SearchableSelect
						buttonPlaceholder="Select an Item"
						inputPlaceholder="Search for..."
						inputValue={inputValue}
						items={items.filter(({name}) =>
							includes(name, inputValue)
						)}
						onInput={this.handleInput}
						onSelect={this.handleSelect}
						selectedItem={selectedItem}
					/>
				</Row>

				<Row>
					<SearchableSelect
						buttonPlaceholder="Select an Item"
						disabled
						inputPlaceholder="Search for..."
						items={items}
						selectedItem={selectedItem}
					/>
				</Row>

				<Row>
					<SearchableSelect
						buttonPlaceholder="Select an Item"
						inputPlaceholder="Search for..."
						items={items}
						selectedItem={selectedItem}
						showSearch={false}
					/>
				</Row>

				<Row>
					<SearchableSelect
						buttonPlaceholder="Has sub-headers"
						inputPlaceholder="Search for..."
						items={[
							{name: 'Test Subheader', subheader: true},
							...items
						]}
						selectedItem={selectedItem}
						showSearch={false}
					/>
				</Row>
			</div>
		);
	}
}

SearchableSelectKit.STATE = {
	inputValue: Config.string().value(''),
	selectedItem: Config.object()
};

export default SearchableSelectKit;