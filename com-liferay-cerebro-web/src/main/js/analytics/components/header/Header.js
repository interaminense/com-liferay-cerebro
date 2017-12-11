import JSXComponent from 'metal-jsx';

class Header extends JSXComponent {
	render() {
		return (
			<header class="header">
				<div class="container-fluid">
					<h2 class="header__title">{this.props.title}</h2>
				</div>
			</header>
		);
	}
}

export default Header;