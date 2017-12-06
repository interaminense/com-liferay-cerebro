import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

const COLORS = ['danger', 'default', 'info', 'primary', 'success', 'warning'];

const SIZES = ['sm', 'lg', 'xl', 'xxl'];

function getInitials(first, last) {
	let retVal = first.substring(0, 1);

	if (last) {
		retVal += last.substring(0, 1);
	}

	return retVal;
}

class Avatar extends Component {
	render() {
		const {colorId, firstName, lastName, size, portraitURL} = this.props;

		const classes = getCN(
			'avatar-root',
			'rounded-circle',
			'sticker',
			`sticker-${COLORS[colorId % COLORS.length]}`,
			{
				[`sticker-${size}`]: size
			}
		);

		return (
			<span class={classes}>
				{
					do {
						if (portraitURL) {
							<img
								alt="thumbnail"
								class="img-fluid"
								src={portraitURL}
							/>;
						} else {
							getInitials(firstName, lastName);
						}
					}
				}
			</span>
		);
	}
}

Avatar.PROPS = {
	colorId: Config.number().value(0),
	firstName: Config.string().value(''),
	lastName: Config.string(),
	portraitURL: Config.string(),
	size: Config.oneOf(SIZES)
};

Avatar.COLORS = COLORS;
Avatar.SIZES = SIZES;

export default Avatar;