import getCN from 'classnames';
import Component, {Config} from 'metal-jsx';

const DISPLAYS = ['pills', 'tabs', 'underline'];

class Item extends Component {
	render() {
		const {active, children, href, onClick} = this.props;

		let content = children;

		if (href) {
			content = (
				<a
					class={getCN('nav-link', {active})}
					href={href}
					onClick={onClick}
					role="tab"
				>
					{children}
				</a>
			);
		}

		return (
			<li
				{...this.otherProps()}
				class="nav-item"
				key={href}
				role="presentation"
			>
				{content}
			</li>
		);
	}
}

Item.STATE = {
	active: Config.bool(),
	href: Config.string(),
	label: Config.string()
};

class Nav extends Component {
	render() {
		const {context: {navBar}, props: {children, display, vertical}} = this;

		const classes = getCN('nav-root', {
			'flex-column': vertical,
			nav: !navBar,
			'navbar-nav': navBar,
			[`nav-${display}`]: display
		});

		return (
			<ul class={classes} role="tablist">
				{children}
			</ul>
		);
	}
}

Nav.PROPS = {
	display: Config.oneOf(DISPLAYS),
	vertical: Config.bool()
};

Nav.Item = Item;

export default Nav;