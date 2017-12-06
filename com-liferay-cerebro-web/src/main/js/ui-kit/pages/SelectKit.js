import Component from 'metal-jsx';

import Select from 'shared/components/Select';
import Item from '../components/Item';
import Row from '../components/Row';

class SelectKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<Item>
						<Select>
							<Select.Item>{'one'}</Select.Item>
							<Select.Item>{'two'}</Select.Item>
							<Select.Item>{'three'}</Select.Item>
							<Select.Item>{'four'}</Select.Item>
						</Select>
					</Item>
				</Row>

				<Row>
					<Item>
						<Select showBlankOption>
							<Select.Item>{'show'}</Select.Item>
							<Select.Item>{'blank'}</Select.Item>
							<Select.Item>{'option'}</Select.Item>
						</Select>
					</Item>
				</Row>

				<Row>
					<Item>
						<Select multiple>
							<Select.Item>{'one'}</Select.Item>
							<Select.Item>{'two'}</Select.Item>
							<Select.Item>{'three'}</Select.Item>
							<Select.Item>{'four'}</Select.Item>
						</Select>
					</Item>
				</Row>
			</div>
		);
	}
}

export default SelectKit;