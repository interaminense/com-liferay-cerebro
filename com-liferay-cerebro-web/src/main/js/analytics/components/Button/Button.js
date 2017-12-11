import JSXComponent from 'metal-jsx';

class Button extends JSXComponent {
	render() {
		return (
			<button
				class={`btn btn-dashboard btn-${this.props.style}`}
				type="button"
			>
				{this.props.label}
			</button>
		);
	}
}

export default Button;