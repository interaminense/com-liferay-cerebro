import Component, {Config} from 'metal-jsx';

import Icon from 'shared/components/Icon';
import Modal from './modal';
import Spinner from './Spinner';

class LoadingModal extends Component {
	render() {
		const {icon, message, title} = this.props;

		return (
			<Modal elementClasses="loading-modal-root" size="sm">
				{title && <h1 class="title">{title}</h1>}

				<div class="icon-container">
					{
						do {
							if (icon) {
								<Icon size="xl" symbol={icon} />;
							} else {
								<Spinner size="lg" />;
							}
						}
					}
				</div>

				{message && <p class="message">{message}</p>}
			</Modal>
		);
	}
}

LoadingModal.PROPS = {
	icon: Config.string(),
	message: Config.string().value(Liferay.Language.get('loading')),
	title: Config.string()
};

export default LoadingModal;