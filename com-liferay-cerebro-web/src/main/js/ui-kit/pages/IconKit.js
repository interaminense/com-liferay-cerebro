import Component from 'metal-jsx';

import Icon from 'shared/components/Icon';
import Item from '../components/Item';
import Row from '../components/Row';

class IconKit extends Component {
	render() {
		return (
			<div>
				<Row>
					{Icon.SIZES.map((size, index) => (
						<Item key={index}>
							<Icon size={size} symbol="dxp-contacts" />
						</Item>
					))}
				</Row>

				<Row>
					{Icon.SIZES.map((size, index) => (
						<Item key={index}>
							<Icon
								monospaced
								size={size}
								symbol="dxp-contacts"
							/>
						</Item>
					))}
				</Row>
			</div>
		);
	}
}

export default IconKit;