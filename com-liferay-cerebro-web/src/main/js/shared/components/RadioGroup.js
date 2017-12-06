import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import {noop} from 'lodash';

class Option extends Component {
	@autobind
	handleClick() {
		const {onClick, value} = this.props;

		onClick(value);
	}

	render() {
		const {checked, disabled, displayInline, label, name} = this.props;

		const classes = getCN('custom-control', 'custom-radio', {
			['custom-control-inline']: displayInline
		});

		return (
			<div class={classes}>
				<label onClick={!disabled && this.handleClick}>
					<input
						{...this.otherProps()}
						checked={checked}
						class="custom-control-input"
						disabled={disabled}
						name={name}
						type="radio"
					/>

					<span class="custom-control-indicator" />

					<span class="custom-control-description">{label}</span>
				</label>
			</div>
		);
	}
}

Option.PROPS = {
	checked: Config.bool(),
	disabled: Config.bool().value(false),
	displayInline: Config.bool().value(false),
	label: Config.string(),
	name: Config.string(),
	onClick: Config.func(),
	value: Config.any()
};

class RadioGroup extends Component {
	render() {
		const {
			checked,
			children,
			disabled,
			inline,
			name,
			onChange
		} = this.props;

		const classes = getCN('form-check', {disabled});

		const displayInline = inline && children.length > 1;

		return (
			<div class={classes}>
				{children.map(child => {
					const {props} = child;

					child.props = {
						...props,
						checked: checked === props.value,
						disabled,
						displayInline,
						name,
						onClick: onChange
					};

					return child;
				})}
			</div>
		);
	}
}

RadioGroup.PROPS = {
	checked: Config.any(),
	disabled: Config.bool().value(false),
	inline: Config.bool().value(false),
	name: Config.string(),
	onChange: Config.func().value(noop)
};

RadioGroup.Option = Option;

export default RadioGroup;