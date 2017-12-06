import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import Icon from './Icon';
import Nav from './Nav';
import NavBar from './NavBar';
import Sidebar from './sidebar';

class BasePage extends Component {
	render() {
		const {children, backUrl, navItems, sidebar, topBarTitle} = this.props;

		const classes = getCN('index-root', {
			'has-sidebar': sidebar,
			'has-sidenav-semi-collapse': !backUrl
		});

		return (
			<div class={classes}>
				{sidebar && <Sidebar />}

				<NavBar
					display="dark"
					elementClasses="page-nav"
					expand
					key="basePageNavBar"
				>
					{backUrl &&
						sidebar && (
							<NavBar.Brand href={backUrl}>
								<Icon
									symbol="angle-left"
									title={Liferay.Language.get('back')}
								/>
							</NavBar.Brand>
						)}

					<NavBar.Brand href={window.location.pathname}>
						{topBarTitle}
					</NavBar.Brand>

					{!!navItems.length && (
						<Nav display="underline">
							{navItems.map(({active, href, label}, index) => (
								<Nav.Item
									active={active}
									href={href}
									key={index}
								>
									{label}
								</Nav.Item>
							))}
						</Nav>
					)}
				</NavBar>

				{children}
			</div>
		);
	}
}

BasePage.PROPS = {
	backUrl: Config.string(),
	navItems: Config.array().value([]),
	sidebar: Config.bool().value(true),
	topBarTitle: Config.oneOfType([Config.string(), Config.array()])
};

export default BasePage;