import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import Constants from 'shared/util/constants';
import IconCardSelector from 'shared/components/IconCardSelector';
import Row from '../components/Row';

const {
	horizontal,
	noAvatar,
	vertical
} = Constants.contactsCardTemplateTypes.profileCardLayoutTypes;

const LAYOUTS = [
	{
		symbol: 'faro-contacts-card-layout-image-left',
		value: horizontal
	},
	{
		symbol: 'faro-contacts-card-layout-no-image',
		value: noAvatar
	},
	{
		symbol: 'faro-contacts-card-layout-image-center',
		value: vertical
	}
];

class IconKit extends Component {
	@autobind
	handleChange(newVal) {
		this.state.layout = newVal;
	}

	render() {
		return (
			<div>
				<Row>
					<IconCardSelector
						items={LAYOUTS}
						onChange={this.handleChange}
						selected={this.state.layout}
					/>
				</Row>
			</div>
		);
	}
}

IconKit.STATE = {
	layout: Config.value(horizontal)
};

export default IconKit;