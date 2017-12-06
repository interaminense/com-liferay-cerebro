import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

const DISPLAYS = [
	'danger',
	'dark',
	'info',
	'light',
	'link',
	'primary',
	'secondary',
	'success',
	'unstyled',
	'warning'
];

const SIZES = ['sm', 'lg'];

class Button extends Component {
	render() {
		const {
			active,
			block,
			display,
			monospaced,
			outline,
			size,
			type
		} = this.props;

		const classes = getCN(
			'button-root',
			'btn',
			`btn${outline ? '-outline' : ''}-${display}`,
			{
				active,
				['btn-block']: block,
				[`btn-${size}`]: size,
				'btn-monospaced': monospaced,
				'nav-link': display === 'link' && this.context.navBar
			}
		);

		return (
			<button {...this.otherProps()} class={classes} type={type}>
				{this.props.children}
			</button>
		);
	}
}

Button.PROPS = {
	active: Config.bool(),
	block: Config.bool(),
	display: Config.oneOf(DISPLAYS).value('secondary'),
	elementClasses: Config.string(),
	monospaced: Config.bool().value(false),
	outline: Config.bool(),
	size: Config.oneOf(SIZES),
	type: Config.string().value('button')
};

Button.DISPLAYS = DISPLAYS;
Button.SIZES = SIZES;

export default Button;