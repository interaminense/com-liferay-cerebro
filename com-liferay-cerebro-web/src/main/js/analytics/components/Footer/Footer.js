import JSXComponent from 'metal-jsx';

class Footer extends JSXComponent {
	render() {
		return (
			<footer class="footer">
				<div class="container-fluid">
					<h4 class="footer__title">{this.props.title}</h4>
				</div>
			</footer>
		);
	}
}

export default Footer;