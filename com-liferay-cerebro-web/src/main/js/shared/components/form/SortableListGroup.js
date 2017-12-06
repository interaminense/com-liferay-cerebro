import Component, {Config} from './Component';
import {identity, uniqueId} from 'lodash';

import SortableListGroup from 'shared/components/SortableListGroup';

class FormSortableList extends Component {
	created() {
		this._id = uniqueId('FormSortableList');

		const {items, valueFn} = this.props;

		if (items) {
			this.state.value = valueFn(items);
		}
	}

	syncItems(newVal) {
		this.state.value = this.props.valueFn(newVal);
	}

	render() {
		const {items} = this.props;

		return <SortableListGroup {...this.otherProps()} items={items} />;
	}
}

FormSortableList.PROPS = {
	items: Config.array().value([]),
	valueFn: Config.func().value(identity)
};

FormSortableList.STATE = {
	value: Config.array().value([])
};

export default FormSortableList;