import JSXComponent from 'metal-jsx';

class Icon extends JSXComponent {
	render() {
		return (
			<svg class="lexicon-icon">
				<use
					xlink:href={`${this.props.spritemap}#${this.props.symbol}`}
				/>
			</svg>
		);
	}
}

Icon.PROPS = {
	spritemap: {
		value: '/node_modules/clay/build/images/icons/icons.svg'
	}
};

export default Icon;