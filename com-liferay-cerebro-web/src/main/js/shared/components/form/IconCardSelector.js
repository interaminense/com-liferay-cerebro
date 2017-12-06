import Component, {Config} from './Component';
import {uniqueId} from 'lodash';

import IconCardSelector from 'shared/components/IconCardSelector';

class FormIconCardSelector extends Component {
	created() {
		this._id = uniqueId('FormIconCardSelector');

		const {selected} = this.props;

		if (selected) {
			this.state.value = selected;
		}
	}

	syncSelected(newVal) {
		this.state.value = newVal;
	}

	render() {
		const {selected} = this.props;

		return <IconCardSelector {...this.otherProps()} selected={selected} />;
	}
}

FormIconCardSelector.PROPS = {
	selected: Config.number()
};

FormIconCardSelector.STATE = {
	value: Config.number()
};

export default FormIconCardSelector;