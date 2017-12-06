import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import Icon from 'shared/components/Icon';

class IconCard extends Component {
	@autobind
	handleClick() {
		const {onSelect, value} = this.props;

		onSelect(value);
	}

	render() {
		const {selected, symbol} = this.props;

		return (
			<li class={selected ? 'selected' : ''} onClick={this.handleClick}>
				<Icon size="lg" symbol={symbol} />
			</li>
		);
	}
}

IconCard.PROPS = {
	onSelect: Config.func(),
	selected: Config.bool(),
	symbol: Config.string(),
	value: Config.number()
};

class IconCardSelector extends Component {
	render() {
		const {items, onChange, selected} = this.props;

		return (
			<ul class="icon-card-selector-root">
				{items.map(({symbol, value}) => (
					<IconCard
						key={value}
						onSelect={onChange}
						selected={selected === value}
						symbol={symbol}
						value={value}
					/>
				))}
			</ul>
		);
	}
}

IconCardSelector.PROPS = {
	items: Config.array(),
	onChange: Config.func(),
	selected: Config.number()
};

export default IconCardSelector;