import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

const DISPLAYS = ['dotted', 'linear'];

const SIZES = ['sm', 'default', 'md', 'lg'];

class Spinner extends Component {
	render() {
		const {display, size} = this.props;

		const classes = getCN('spinner-root', 'loading-icon', display, {
			[`loading-icon-${size}`]: size
		});

		return <div {...this.otherProps()} class={classes} />;
	}
}

Spinner.PROPS = {
	display: Config.oneOf(DISPLAYS).value(DISPLAYS[0]),
	size: Config.oneOf(SIZES)
};

Spinner.DISPLAYS = DISPLAYS;
Spinner.SIZES = SIZES;

export default Spinner;