import autobind from 'autobind-decorator';
import Checkbox from '../Checkbox';
import FormComponent, {Config} from './Component';

class FormCheckbox extends FormComponent {
	created() {
		this.state.value = this.props.initialValue;
	}

	@autobind
	handleChange() {
		const {onChange} = this.props;

		const newVal = !this.state.value;

		this.state.value = newVal;

		if (onChange) {
			onChange(newVal);
		}
	}

	syncInitialValue(newVal) {
		this.state.value = newVal;
	}

	render() {
		return (
			<Checkbox
				{...this.otherProps()}
				name={this.props.name}
				onChange={this.handleChange}
			/>
		);
	}
}

FormCheckbox.PROPS = {
	initialValue: Config.bool().value(false),
	name: Config.string().required(),
	onChange: Config.func()
};

FormCheckbox.STATE = {
	value: Config.value(false)
};

export default FormCheckbox;