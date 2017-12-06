import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {noop} from 'lodash';

import Button from '../Button';
import Icon from '../Icon';

class Header extends Component {
	@autobind
	handleCloseClick() {
		this.props.onClose();
	}

	render() {
		const {closeButton, title} = this.props;

		return (
			<div class="modal-header">
				{title && <h4 class="modal-title">{title}</h4>}

				{closeButton && (
					<Button
						elementClasses="close"
						onClick={this.handleCloseClick}
					>
						<Icon symbol="times" />
					</Button>
				)}
			</div>
		);
	}
}

Header.PROPS = {
	closeButton: Config.bool().value(true),
	onClose: Config.func().value(noop),
	title: Config.string()
};

export default Header;