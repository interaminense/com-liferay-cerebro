import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import {noop} from 'lodash';

import Checkbox from './Checkbox';
import DateInput from './DateInput';
import IconCardSelector from './IconCardSelector';
import Input from './Input';
import Label from './Label';
import RadioGroup from './RadioGroup';
import SearchableSelect from './SearchableSelect';
import Select from './Select';
import SortableListGroup from './SortableListGroup';

class FormGroupAddon extends Component {
	render() {
		return (
			<span {...this.otherProps()} class="input-group-addon">
				{this.props.children}
			</span>
		);
	}
}

class FormGroup extends Component {
	render() {
		const {autoFit, children, inline, transparent} = this.props;

		const classes = getCN('form-group', {
			'form-inline': inline,
			'form-inline-autofit': autoFit,
			'input-group-transparent': transparent
		});

		return <div class={classes}>{children}</div>;
	}
}

FormGroup.PROPS = {
	autoFit: Config.bool(),
	inline: Config.bool(),
	transparent: Config.bool()
};

class Form extends Component {
	created() {
		this._formElements = [];
	}

	addFormElement(component) {
		this._formElements.push(component);
	}

	doValidate(showErrors = true) {
		return this._formElements.reduce(
			(res, element) => element.validateFormElement(showErrors) && res,
			true
		);
	}

	getChildContext() {
		return {ancestorForm: this};
	}

	/**
	 * Public method used for values of form.
	 */
	getValues() {
		return this._formElements.reduce(
			(res, next) => ({
				...res,
				[next.getFormElementName()]: next.getFormElementValue()
			}),
			{}
		);
	}

	@autobind
	handleSubmit(event) {
		const {validateOnSubmit, onSubmit} = this.props;

		event.preventDefault();

		if (validateOnSubmit && this.validate()) {
			onSubmit(this.getValues());
		}
	}

	informChange(name) {
		this.props.onChange(this.getValues(), name);
	}

	/**
	 * Public method used for checking if form is valid.
	 */
	isValid() {
		return this.doValidate(false);
	}

	removeFormElement(component) {
		this._formElements = this._formElements.filter(
			element => element !== component
		);
	}

	/**
	 * Public method used for displaying a forms errors.
	 */
	validate() {
		return this.doValidate();
	}

	render() {
		return (
			<form
				{...this.otherProps()}
				class="form-root"
				onSubmit={this.handleSubmit}
			>
				{this.props.children}
			</form>
		);
	}
}

Form.PROPS = {
	onChange: Config.func().value(noop),
	onSubmit: Config.func().value(noop),
	validateOnSubmit: Config.bool().value(true)
};

Form.Checkbox = Checkbox;
Form.DateInput = DateInput;
Form.Group = FormGroup;
Form.GroupAddon = FormGroupAddon;
Form.IconCardSelector = IconCardSelector;
Form.Input = Input;
Form.Label = Label;
Form.RadioGroup = RadioGroup;
Form.SearchableSelect = SearchableSelect;
Form.Select = Select;
Form.SortableListGroup = SortableListGroup;

export default Form;