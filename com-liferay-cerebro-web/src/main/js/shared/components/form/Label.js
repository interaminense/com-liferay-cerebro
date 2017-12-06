import Component, {Config} from 'metal-jsx';

import Icon from '../Icon';

class Label extends Component {
	render() {
		const {children, info, required} = this.props;

		return (
			<label {...this.otherProps()} class="form-control-label label-root">
				{children}

				{info && (
					<Icon
						data-tooltip
						elementClasses="info"
						symbol="question-circle-full"
						title={info}
					/>
				)}

				{required && (
					<span>{`(${Liferay.Language.get('required')})`}</span>
				)}
			</label>
		);
	}
}

Label.PROPS = {
	info: Config.string(),
	required: Config.bool().value(false)
};

export default Label;