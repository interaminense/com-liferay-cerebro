import Component from 'metal-jsx';

class Footer extends Component {
	render() {
		return <div class="modal-footer">{this.props.children}</div>;
	}
}

export default Footer;