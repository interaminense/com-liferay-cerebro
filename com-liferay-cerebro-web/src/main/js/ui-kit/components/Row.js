import Component from 'metal-jsx';

class Row extends Component {
	render() {
		return (
			<div class="kit-row-root" {...this.otherProps()}>
				{this.props.children}
			</div>
		);
	}
}

export default Row;