import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import {noop} from 'lodash';

import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const SIZES = ['sm', 'lg', 'xl'];

class Modal extends Component {
	render() {
		const {size} = this.props;

		const classes = getCN('modal-dialog', {
			[`modal-${size}`]: size
		});

		return (
			<div class={classes}>
				<div class="modal-content">{this.props.children}</div>
			</div>
		);
	}
}

Modal.PROPS = {
	onClickOutside: Config.func().value(noop),
	size: Config.oneOf(SIZES)
};

Modal.SIZES = SIZES;

Modal.Body = Body;
Modal.Footer = Footer;
Modal.Header = Header;

export default Modal;