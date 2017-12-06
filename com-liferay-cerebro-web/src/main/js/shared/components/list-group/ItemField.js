import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

class ItemField extends Component {
	render() {
		const {children, expand} = this.props;

		const classes = getCN('flex-col', {
			'flex-col-expand': expand
		});

		return (
			<div {...this.otherProps()} class={classes}>
				{children}
			</div>
		);
	}
}

ItemField.PROPS = {
	expand: Config.bool().value(false)
};

export default ItemField;