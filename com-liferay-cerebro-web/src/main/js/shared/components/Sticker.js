import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import {isString} from 'lodash';

import Icon from './Icon';

const DISPLAYS = [
	'primary',
	'secondary',
	'success',
	'info',
	'warning',
	'danger',
	'light',
	'dark'
];

const SIZES = ['sm', 'lg'];

class Sticker extends Component {
	render() {
		const {display, size, symbol} = this.props;

		const classes = getCN(
			'sticker',
			'sticker-root',
			'sticker-rounded',
			'sticker-static',
			{
				[`sticker-${display}`]: display,
				[`sticker-${size}`]: size
			}
		);

		return (
			<div {...this.otherProps()} class={classes}>
				<Icon symbol={symbol} />
			</div>
		);
	}
}

Sticker.PROPS = {
	display: Config.oneOf(DISPLAYS),
	elementClasses: Config.string(),
	size: Config.oneOf(SIZES),
	symbol: Config.string().required()
};

export function hashCode(s) {
	return s.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
}

export function getDisplayForId(id) {
	if (isString(id)) {
		id = hashCode(id);
	}

	return DISPLAYS[id % DISPLAYS.length];
}

Sticker.DISPLAYS = DISPLAYS;
Sticker.SIZES = SIZES;

export default Sticker;