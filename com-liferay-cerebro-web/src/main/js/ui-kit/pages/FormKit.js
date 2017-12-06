import Component from 'metal-jsx';

import Button from 'shared/components/Button';
import Form from 'shared/components/form';

import Item from '../components/Item';
import Row from '../components/Row';

class FormKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<Item>
						<Form>
							<Form.Input
								label="Required"
								name="test"
								placeholder="required input"
								validator={{required: true}}
							/>

							<Form.DateInput
								label="Date"
								name="date"
								placeholder="required date"
								validator={{required: true}}
							/>

							<Form.Input
								label="Min Length"
								name="test"
								placeholder="min 5 char"
								validator={{minLength: 5}}
							/>

							<Form.Input
								label="Max Length"
								name="test"
								placeholder="max 5 char"
								validator={{maxLength: 5}}
							/>

							<Form.Input
								label="Two Validators"
								name="test"
								placeholder="max 5 char"
								validator={{
									maxLength: 10,
									required: true
								}}
							/>

							<Form.Select label="Select" name="test">
								<Form.Select.Item key={1} selected>
									{'1'}
								</Form.Select.Item>
								<Form.Select.Item key={2}>
									{'2'}
								</Form.Select.Item>
								<Form.Select.Item key={3}>
									{'3'}
								</Form.Select.Item>
							</Form.Select>

							<Form.Select
								label="Show Blank Option"
								name="test"
								showBlankOption
							>
								<Form.Select.Item key={1}>
									{'1'}
								</Form.Select.Item>
								<Form.Select.Item key={2}>
									{'2'}
								</Form.Select.Item>
								<Form.Select.Item key={3}>
									{'3'}
								</Form.Select.Item>
							</Form.Select>

							<Form.Select
								label="Required"
								name="test"
								showBlankOption
								validator={{required: true}}
							>
								<Form.Select.Item key={1}>
									{'1'}
								</Form.Select.Item>
								<Form.Select.Item key={2}>
									{'2'}
								</Form.Select.Item>
								<Form.Select.Item key={3}>
									{'3'}
								</Form.Select.Item>
							</Form.Select>

							<Button type="submit">{'Submit'}</Button>
						</Form>
					</Item>
				</Row>
			</div>
		);
	}
}

export default FormKit;