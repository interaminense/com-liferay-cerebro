import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';

import Button from './Button';
import Form from './form';
import Modal from './modal';
import sendRequest from 'shared/util/request';

const TYPES = [
	{
		name: Liferay.Language.get('string'),
		value: 'string'
	},
	{
		name: Liferay.Language.get('number'),
		value: 'number'
	},
	{
		name: Liferay.Language.get('boolean'),
		value: 'boolean'
	},
	{
		name: Liferay.Language.get('date'),
		value: 'date'
	}
];

class CreateMappingModal extends Component {
	@autobind
	handleSubmit(formValues) {
		sendRequest({
			data: {
				name: formValues.name,
				type: formValues.type.value
			},
			method: 'PUT',
			path: 'contacts/contacts_mapping'
		}).then(this.props.onClose);
	}

	@autobind
	handleTypeChange(newVal) {
		this.state.selectedType = newVal;
	}

	render() {
		const {props: {onClose}, state: {selectedType}} = this;

		return (
			<Modal elementClasses="create-mapping-modal-root" size="lg">
				<Modal.Header
					onClose={onClose}
					title={Liferay.Language.get('create-new-scv-field')}
				/>

				<Form onSubmit={this.handleSubmit}>
					<Form.Group autoFit inline>
						<Form.Input
							label={Liferay.Language.get('new-field-name')}
							name="name"
							placeholder={Liferay.Language.get(
								'enter-new-field-name'
							)}
						/>

						<div>
							<label>{Liferay.Language.get('field-type')}</label>

							<Form.SearchableSelect
								buttonPlaceholder={
									(selectedType && selectedType.name) ||
									Liferay.Language.get('select')
								}
								caretDouble
								initialValue={selectedType}
								items={TYPES}
								name="type"
								onSelect={this.handleTypeChange}
								selectedItem={selectedType}
								showSearch={false}
							/>
						</div>
					</Form.Group>

					<Modal.Footer>
						<Button onClick={onClose}>
							{Liferay.Language.get('cancel')}
						</Button>

						<Button display="primary" type="submit">
							{Liferay.Language.get('create')}
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		);
	}
}

CreateMappingModal.PROPS = {
	onClose: Config.func()
};

CreateMappingModal.STATE = {
	selectedType: Config.object()
};

export default CreateMappingModal;