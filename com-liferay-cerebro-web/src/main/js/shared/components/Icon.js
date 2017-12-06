import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import analyticsConstants from '../util/constants';

const SIZES = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

class Icon extends Component {
	render() {
		const {color, monospaced, size, symbol} = this.props;

		const classes = getCN(
			'icon-root',
			'lexicon-icon',
			`lexicon-icon-${symbol}`,
			{
				[`${color}-color`]: color,
				['icon-monospaced']: monospaced,
				[`icon-size-${size}`]: size
			}
		);

		return (
			<svg {...this.otherProps()} class={classes}>
				<use
					xlink:href={`${
						analyticsConstants.pathThemeImages
					}/lexicon/icons.svg#${symbol}`}
				/>
			</svg>
		);
	}
}

Icon.PROPS = {
	color: Config.string(),
	elementClasses: Config.string(),
	monospaced: Config.bool(),
	size: Config.oneOf(SIZES),
	symbol: Config.string().required()
};

Icon.SIZES = SIZES;

export default Icon;