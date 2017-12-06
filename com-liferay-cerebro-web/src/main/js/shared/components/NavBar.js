import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

const DISPLAYS = ['dark', 'light'];

class Brand extends Component {
	render() {
		const {children, href} = this.props;

		return do {
			if (href) {
				<a {...this.otherProps()} class="navbar-brand" href={href}>
					{children}
				</a>;
			} else {
				<div {...this.otherProps()} class="navbar-brand">
					{children}
				</div>;
			}
		};
	}
}

Brand.PROPS = {
	href: Config.string()
};

class NavBar extends Component {
	getChildContext() {
		return {navBar: true};
	}

	render() {
		const {children, display, expand} = this.props;

		const classes = getCN('navbar', {
			'navbar-dark': display === 'dark',
			'navbar-expand': expand,
			'navbar-light': display === 'light'
		});

		return <nav class={classes}>{children}</nav>;
	}
}

NavBar.PROPS = {
	display: Config.oneOf(DISPLAYS),
	expand: Config.bool().value(false)
};

NavBar.Brand = Brand;

export default NavBar;