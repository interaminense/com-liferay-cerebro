import Component from 'metal-jsx';

import Item from '../components/Item';
import Row from '../components/Row';

const COLORS = [
	/* theme colors */
	'primary',
	'secondary',
	'success',
	'info',
	'warning',
	'danger',
	'light',
	'dark',

	/* misc. colors */
	'body-bg',
	'body-color',
	'text-muted',
	'component-active-bg',
	'component-active-color',
	'link-color',
	'link-hover-color'
];

class ColorKit extends Component {
	render() {
		return (
			<div>
				<Row>
					{COLORS.map((color, index) => (
						<Item key={index}>
							<div class={`color-swatch ${color}`}>
								<div class="color-display" />
								<p class="color-label">{color}</p>
							</div>
						</Item>
					))}
				</Row>
			</div>
		);
	}
}

export default ColorKit;