import Component from 'metal-jsx';

import * as Data from 'test/data';
import Constants from 'shared/util/constants';
import Row from '../components/Row';
import mockStore from 'test/mock-store';

const store = mockStore();

const {profileCardLayoutTypes} = Constants.contactsCardTemplateTypes;

class ProfileCardKit extends Component {
	render() {
		const entity = Data.mockIndividual();

		const cardTemplate = Data.mockProfileCardTemplate();

		return (
			<div>
				<Row />

				<Row />

				<Row />

				<Row />
			</div>
		);
	}
}

export default ProfileCardKit;