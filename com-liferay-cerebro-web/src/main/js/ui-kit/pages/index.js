import Component, {Config} from 'metal-jsx';
import {find} from 'lodash';

import BasePage from 'shared/components/BasePage';
import Nav from 'shared/components/Nav';
import Tooltip from 'shared/components/Tooltip';

const req = require.context('.', false, /\w+Kit.js$/);

const kits = req.keys().map((kit, id) => ({
	component: req(kit, id).default,
	id,
	name: kit.replace('./', '').replace('Kit.js', '')
}));

const defaultItem = {
	component: () => <h1>{'Select a Component'}</h1>
};

class UIKit extends Component {
	render() {
		const {componentName} = this.props.router.params;

		const selectedItem = find(kits, ['name', componentName]) || defaultItem;

		const ComponentKit = selectedItem.component;

		return (
			<BasePage topBarTitle="UI Kit">
				<div class="container-fluid-xxl ui-kit-root">
					<div class="row">
						<div class="col-sm-2">
							<Nav display="pills" vertical>
								{kits.map(({name}) => (
									<Nav.Item
										active={name == componentName}
										href={`/ui-kit/${name}`}
										key={name}
									>
										{name}
									</Nav.Item>
								))}
							</Nav>
						</div>

						<div class="col-sm-10">
							<ComponentKit />
						</div>
					</div>
				</div>

				<Tooltip />
			</BasePage>
		);
	}
}

UIKit.PROPS = {
	router: Config.object().required()
};

export default UIKit;