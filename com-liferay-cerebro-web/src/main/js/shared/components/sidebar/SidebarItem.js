import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import Icon from '../Icon';

class SidebarItem extends Component {
	render() {
		const {active, href, icon, label} = this.props;

		const classes = getCN('sidebar-item', {active});

		return (
			<li class={classes}>
				<a href={href}>
					<Icon monospaced={false} symbol={icon} />

					<span class="sidebar-hide">{label}</span>
				</a>
			</li>
		);
	}
}

SidebarItem.PROPS = {
	active: Config.bool(),
	href: Config.string(),
	icon: Config.string(),
	label: Config.string()
};

export default SidebarItem;