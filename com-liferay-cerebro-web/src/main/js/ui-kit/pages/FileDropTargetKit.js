import Component from 'metal-jsx';

import FileDropTarget from 'shared/components/FileDropTarget';
import Row from '../components/Row';

class FileDropTargetKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<FileDropTarget uploadURL="/foo" />
				</Row>
			</div>
		);
	}
}

export default FileDropTargetKit;