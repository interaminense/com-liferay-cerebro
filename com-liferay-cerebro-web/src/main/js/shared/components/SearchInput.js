import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {noop} from 'lodash';

import Button from './Button';
import Icon from './Icon';
import Input from './Input';

class SearchInput extends Component {
	@autobind
	handleKeyDown(event) {
		if (event.key === 'Enter') {
			this.props.onSubmit(this.refs.input.element.value);
		}
	}

	@autobind
	handleSubmit() {
		this.props.onSubmit(this.refs.input.element.value);
	}

	render() {
		const {placeholder} = this.props;

		return (
			<div class={this.context.navBar ? 'navbar-form' : ''}>
				<Input.Group inset>
					<Input.GroupInput>
						<Input
							{...this.otherProps()}
							onKeyDown={this.handleKeyDown}
							placeholder={placeholder}
							ref="input"
						/>
					</Input.GroupInput>

					<Input.Inset>
						<Button display="unstyled" onClick={this.handleSubmit}>
							<Icon symbol="search" />
						</Button>
					</Input.Inset>
				</Input.Group>
			</div>
		);
	}
}

SearchInput.PROPS = {
	onSubmit: Config.func().value(noop),
	placeholder: Config.string().value(Liferay.Language.get('search'))
};

export default SearchInput;