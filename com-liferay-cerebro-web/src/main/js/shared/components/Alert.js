import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import Icon from './Icon';

const TYPES = [
	'danger',
	'dark',
	'info',
	'light',
	'primary',
	'secondary',
	'success',
	'warning'
];

class AlertLink extends Component {
	render() {
		return (
			<a {...this.otherProps()} class="alert-link">
				{this.props.children}
			</a>
		);
	}
}

class Alert extends Component {
	@autobind
	handleClose() {
		const {id, onClose} = this.props;

		onClose(id);
	}

	render() {
		const {onClose, children, notification, title, type} = this.props;

		const classes = getCN('alert', {
			'alert-dismissible': onClose,
			[`alert-${type}`]: type,
			'alert-notification': notification
		});

		let content = children;

		if (notification) {
			content = <p>{children}</p>;
		}

		return (
			<div class={classes} role="alert">
				{onClose && (
					<button class="close" onClick={this.handleClose}>
						<Icon symbol="times" />
					</button>
				)}

				{title && <strong class="lead">{title}</strong>}

				{content}
			</div>
		);
	}
}

Alert.PROPS = {
	notification: Config.bool().value(false),
	onClose: Config.func(),
	title: Config.string(),
	type: Config.oneOf(TYPES)
};

Alert.AlertLink = AlertLink;
Alert.TYPES = TYPES;

export default Alert;