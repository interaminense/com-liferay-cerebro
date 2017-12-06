import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import RadioGroup from 'shared/components/RadioGroup';
import Row from '../components/Row';

class InputKit extends Component {
	@autobind
	handleChange(value) {
		this.state.value = value;
	}

	render() {
		return (
			<div>
				<Row>
					<RadioGroup name="foo">
						<RadioGroup.Option value={1} />
					</RadioGroup>
				</Row>

				<Row>
					<RadioGroup
						checked={this.state.value}
						name="bar"
						onChange={this.handleChange}
					>
						<RadioGroup.Option label="Option 1" value={1} />
						<RadioGroup.Option label="Option 2" value={2} />
						<RadioGroup.Option label="Option 3" value={3} />
					</RadioGroup>
				</Row>

				<Row>
					<RadioGroup
						disabled
						name="baz"
						onChange={this.handleChange}
					>
						<RadioGroup.Option label="disabled" value={1} />
					</RadioGroup>
				</Row>
			</div>
		);
	}
}

InputKit.STATE = {
	value: Config.value(1)
};

export default InputKit;