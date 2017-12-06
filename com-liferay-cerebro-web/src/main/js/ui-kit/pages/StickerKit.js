import Component from 'metal-jsx';

import Sticker from 'shared/components/Sticker';
import Item from '../components/Item';
import Row from '../components/Row';

class StickerKit extends Component {
	render() {
		return (
			<div>
				<Row>
					{Sticker.DISPLAYS.map((display, index) => (
						<Item key={index}>
							<Sticker display={display} symbol="dxp-contacts" />
						</Item>
					))}
				</Row>
				<Row>
					{Sticker.DISPLAYS.map((display, index) => (
						<Item key={index}>
							<Sticker display={display} symbol="dxp-contacts" />
						</Item>
					))}
				</Row>
				<Row>
					{Sticker.SIZES.map((size, index) => (
						<Item key={index}>
							<Sticker
								display="primary"
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

export default StickerKit;