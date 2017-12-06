import Component, {Config} from 'metal-jsx';

class SelectItem extends Component {
	render() {
		return <option {...this.otherProps()}>{this.props.children}</option>;
	}
}

class Select extends Component {
	render() {
		const {children, showBlankOption} = this.props;

		return (
			<select class="form-control select-root" {...this.otherProps()}>
				{showBlankOption && <SelectItem />}

				{children}
			</select>
		);
	}
}

Select.PROPS = {
	showBlankOption: Config.bool().value(false)
};

Select.Item = SelectItem;

export default Select;