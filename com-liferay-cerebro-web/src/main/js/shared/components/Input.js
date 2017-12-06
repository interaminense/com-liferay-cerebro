import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import Button from './Button';

const SIZES = ['lg', 'sm'];

class InputAddon extends Component {
	render() {
		return <div class="input-group-addon">{this.props.children}</div>;
	}
}

class InputButton extends Component {
	render() {
		return (
			<span class="input-group-btn">
				<Button {...this.otherProps()}>{this.props.children}</Button>
			</span>
		);
	}
}

class InputInset extends Component {
	render() {
		return (
			<span class="input-group-inset-item">{this.props.children}</span>
		);
	}
}

class InputGroupInput extends Component {
	render() {
		return <div class="input-group-input">{this.props.children}</div>;
	}
}

class InputGroup extends Component {
	render() {
		const {children, inset, size} = this.props;

		const classes = getCN('input-group', {
			'input-group-inset': inset,
			[`input-group-${size}`]: size
		});

		return (
			<div class={classes} {...this.otherProps()}>
				{children}
			</div>
		);
	}
}

InputGroup.PROPS = {
	inset: Config.bool().value(false),
	size: Config.oneOf(SIZES)
};

class Input extends Component {
	/**
	 * Public method used for focusing the input element.
	 */
	focus() {
		this.element.focus();
	}

	/**
	 * Public method used for retrieving value of input.
	 */
	getValue() {
		return this.element.value;
	}

	render() {
		const {size} = this.props;

		const classes = getCN('input-root', 'form-control', {
			[`form-control-${size}`]: size
		});

		return <input type="text" {...this.otherProps()} class={classes} />;
	}
}

Input.PROPS = {
	size: Config.oneOf(SIZES)
};

Input.Addon = InputAddon;
Input.Group = InputGroup;
Input.GroupInput = InputGroupInput;
Input.Button = InputButton;
Input.Inset = InputInset;

Input.SIZES = SIZES;

export default Input;