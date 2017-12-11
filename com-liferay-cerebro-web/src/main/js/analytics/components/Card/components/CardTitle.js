import JSXComponent from 'metal-jsx';

class CardTitle extends JSXComponent {
	render() {
		return (
			<div class={`${this.props.className}__title`}>
				{this.props.title}
			</div>
		);
	}
}

export default CardTitle;