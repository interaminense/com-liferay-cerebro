import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

const SIZES = ['sm', 'default', 'md', 'lg'];

class Checkbox extends Component {
	syncIndeterminate(newVal, prevVal) {
		if (newVal !== prevVal) {
			this.refs.checkbox.indeterminate = newVal;
		}
	}

	render() {
		const {checked, disabled, displayInline, label, name} = this.props;

		const classes = getCN('custom-control', 'custom-checkbox', {
			['custom-control-inline']: displayInline
		});

		return (
			<div class={classes}>
				<label {...this.otherProps()}>
					<input
						checked={checked}
						class="custom-control-input"
						disabled={disabled}
						name={name}
						ref="checkbox"
						type="checkbox"
						value={checked}
					/>

					<span class="custom-control-indicator" />

					<span class="custom-control-description">{label}</span>
				</label>
			</div>
		);
	}
}

Checkbox.PROPS = {
	checked: Config.bool(),
	disabled: Config.bool(),
	displayInline: Config.bool(),
	elementClasses: Config.string(),
	indeterminate: Config.bool(),
	label: Config.string(),
	name: Config.string()
};

Checkbox.SIZES = SIZES;

export default Checkbox;