import Component, {Config} from 'metal-jsx';

import Icon from '../Icon';
import SidebarItem from './SidebarItem';
import UserIcon from '../UserIcon';

class Sidebar extends Component {
	render() {
		const {user} = this.props;

		return (
			<div class="sidebar-root">
				<div class="header">
					<Icon monospaced={false} size="md" symbol="dxp-logo-iso" />

					<Icon
						elementClasses="sidebar-hide"
						monospaced={false}
						symbol="dxp-logo"
					/>
				</div>

				{user && (
					<div class="user">
						<UserIcon />

						<span class="sidebar-hide">{user.name}</span>
					</div>
				)}

				<div class="sidebar-nav">
					<ul class="nav">
						<SidebarItem
							href="/web/analytics"
							icon="dxp-home"
							label="Home"
						/>
						<SidebarItem
							href="/web/analytics/forms"
							icon="dxp-home"
							label="Form Analytics"
						/>
						<SidebarItem
							href="/web/analytics/workflow"
							icon="dxp-home"
							label="Workflow Analytics"
						/>
					</ul>
				</div>

				<div class="footer">
					<ul class="nav">
						{process.env.NODE_ENV === 'development' && (
							<SidebarItem
								href="/ui-kit"
								icon="code"
								label="UI Kit"
							/>
						)}
					</ul>
				</div>
			</div>
		);
	}
}

Sidebar.PROPS = {
	user: Config.object()
};

export default Sidebar;