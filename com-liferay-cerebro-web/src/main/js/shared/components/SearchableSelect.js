import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {noop} from 'lodash';

import Button from './Button';
import Dropdown from './Dropdown';
import SearchInput from './SearchInput';

class Item extends Component {
	@autobind
	handleClick() {
		this.props.onSelect(this.props.item);
	}

	render() {
		const {item} = this.props;

		return (
			<Dropdown.Item
				{...this.otherProps()}
				hideOnClick
				onClick={this.handleClick}
			>
				{item.name}
			</Dropdown.Item>
		);
	}
}

Item.PROPS = {
	item: Config.object().required(),
	onSelect: Config.func().value(noop)
};

class SearchableSelect extends Component {
	@autobind
	handleSelect(item) {
		this.props.onSelect(item);
	}

	render() {
		const {
			buttonPlaceholder,
			footerButtonMessage,
			footerOnClick,
			inputPlaceholder,
			inputValue,
			items,
			onInput,
			readOnly,
			selectedItem,
			showSearch
		} = this.props;

		return (
			<Dropdown
				{...this.otherProps()}
				elementClasses="searchable-select-root"
				label={(selectedItem && selectedItem.name) || buttonPlaceholder}
				readOnly={readOnly}
			>
				{showSearch && (
					<Dropdown.Section>
						<SearchInput
							onInput={onInput}
							placeholder={inputPlaceholder}
							value={inputValue}
						/>
					</Dropdown.Section>
				)}

				<Dropdown.Section elementClasses="items-wrapper">
					{items.map(
						(item, i) =>
							do {
								if (item.subheader) {
									<Dropdown.Subheader key={item.name}>
										{item.name}
									</Dropdown.Subheader>;
								} else {
									<Item
										active={
											selectedItem &&
											item.value === selectedItem.value
										}
										item={item}
										key={i}
										onSelect={this.handleSelect}
									/>;
								}
							}
					)}
				</Dropdown.Section>

				{footerOnClick && (
					<div class="footer-action">
						<Button block display="primary" onClick={footerOnClick}>
							{footerButtonMessage}
						</Button>
					</div>
				)}
			</Dropdown>
		);
	}
}

SearchableSelect.PROPS = {
	buttonPlaceholder: Config.string().value(''),
	footerButtonMessage: Config.string(),
	footerOnClick: Config.func(),
	inputPlaceholder: Config.string().value(''),
	inputValue: Config.string().value(''),
	items: Config.array().required(),
	onInput: Config.func().value(noop),
	onSelect: Config.func().value(noop),
	readOnly: Config.bool(),
	selectedItem: Config.shapeOf({
		name: Config.string(),
		value: Config.any()
	}),
	showSearch: Config.bool().value(true)
};

export default SearchableSelect;