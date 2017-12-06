import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import {checkRequired} from '../../util/form-validators';

class FormComponent extends Component {
	attached() {
		this.on('valueChanged', this.informChange);

		const {ancestorForm} = this.context;

		if (ancestorForm) {
			ancestorForm.addFormElement(this);
		}
	}

	detached() {
		const {ancestorForm} = this.context;

		if (ancestorForm) {
			ancestorForm.removeFormElement(this);
		}
	}

	getFormElementName() {
		return this.props.name;
	}

	getFormElementValue() {
		const {name, processValue} = this.props;

		let {value} = this.state;

		if (processValue) {
			value = processValue(value, name);
		}

		return value;
	}

	@autobind
	informChange() {
		if (this.context.ancestorForm) {
			this.context.ancestorForm.informChange(this.props.name);
		}
	}

	isRequired() {
		const {validator} = this.props;

		return validator && checkRequired(validator);
	}

	validateFormElement() {
		return true;
	}
}

FormComponent.PROPS = {
	name: Config.string().required(),
	processValue: Config.func()
};

FormComponent.STATE = {
	value: Config.any()
};

export {Config} from 'metal-jsx';

export default FormComponent;