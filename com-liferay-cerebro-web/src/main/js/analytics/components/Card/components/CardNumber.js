import JSXComponent from 'metal-jsx';

class CardNumber extends JSXComponent {
	render() {
		return (
			<div class={`${this.props.className}__number`}>
				{this.props.number}
			</div>
		);
	}
}

export default CardNumber;