import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import Item from './Item';
import ItemField from './ItemField';

class ListGroup extends Component {
	render() {
		const {children, noBorder} = this.props;

		const classes = getCN('list-group', 'list-group-root', {
			'no-border': noBorder
		});

		return (
			<ul {...this.otherProps()} class={classes}>
				{children}
			</ul>
		);
	}
}

ListGroup.PROPS = {
	noBorder: Config.bool().value(false)
};

ListGroup.Item = Item;
ListGroup.ItemField = ItemField;

export default ListGroup;