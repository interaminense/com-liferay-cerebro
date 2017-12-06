import Component from 'metal-jsx';

import TestModal from 'shared/components/TestModal';

class ModalKit extends Component {
	render() {
		return (
			<div>
				<TestModal size="sm" title="Small Modal" />

				<TestModal title="Default Modal" />

				<TestModal size="lg" title="Large Modal" />
			</div>
		);
	}
}

export default ModalKit;