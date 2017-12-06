import Component, {Config} from './Component';
import getCN from 'classnames';
import {uniqueId} from 'lodash';

import SearchableSelect from '../SearchableSelect';
import Select from '../Select';

class FormSearchableSelect extends Component {
	created() {
		this._id = uniqueId('FormSearchableSelect');

		const {initialValue} = this.props;

		if (initialValue) {
			this.state.value = initialValue;
		}
	}

	syncInitialValue(newVal) {
		if (newVal) {
			this.state.value = newVal;
		}
	}

	render() {
		const {show, valid, value} = this.state;

		const classes = getCN({
			'has-danger': !valid,
			'has-success': valid && show
		});

		return (
			<SearchableSelect
				{...this.otherProps()}
				elementClasses={classes}
				inputPlaceholder={Liferay.Language.get('search')}
				selectedItem={value}
			/>
		);
	}
}

FormSearchableSelect.PROPS = {
	initialValue: Config.object()
};

FormSearchableSelect.STATE = {
	show: Config.value(false),
	valid: Config.value(true),
	value: Config.object()
};

FormSearchableSelect.Item = Select.Item;

export default FormSearchableSelect;