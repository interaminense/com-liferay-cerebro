import Component from 'metal-jsx';

class Item extends Component {
	render() {
		return <div class="kit-item-root">{this.props.children}</div>;
	}
}

export default Item;