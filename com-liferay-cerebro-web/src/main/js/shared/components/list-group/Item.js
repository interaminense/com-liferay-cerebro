import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

class Item extends Component {
	render() {
		const {children, flex, header} = this.props;

		const classes = getCN({
			'list-group-header': header,
			'list-group-item': !header,
			'list-group-item-flex': flex
		});

		return (
			<li {...this.otherProps()} class={classes}>
				{children}
			</li>
		);
	}
}

Item.PROPS = {
	flex: Config.bool().value(false),
	header: Config.bool().value(false)
};

export default Item;