import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import DropTarget, {DRAG_TYPES} from 'metal-drop-target';
import {noop} from 'lodash';

import Button from './Button';
import FileUploader from '../util/FileUploader';
import ProgressBar from './ProgressBar';
import {sub} from '../util/lang';

class FileDropTarget extends Component {
	created() {
		this._uploader = new FileUploader({
			onChange: this.handleFileProgress,
			uploadURL: this.props.uploadURL
		}).render();
	}

	@autobind
	handleCancel() {
		this._uploader.clearInputData();

		this.state.file = null;

		this.props.onChange(null);
	}

	@autobind
	handleFileDrop(event) {
		const {files} = event.dataTransfer;

		this._uploader.addFiles(files);
	}

	@autobind
	handleFileProgress(file) {
		this.state.file = file;

		this.props.onChange(file);
	}

	@autobind
	handleFileSelector() {
		this._uploader.openDialog();
	}

	render() {
		const {file} = this.state;

		return (
			<div class="file-drop-target-root">
				{!file && (
					<DropTarget
						hoverMessage={Liferay.Language.get('drop-file')}
						message={sub(
							Liferay.Language.get('drop-your-x-file-here'),
							[name]
						)}
						onDrop={this.handleFileDrop}
						targetType={DRAG_TYPES.FILE}
					/>
				)}

				{!file && (
					<div class="choose-file">
						{Liferay.Language.get('or-upload-it-from-your-files')}

						<Button
							display="link"
							onClick={this.handleFileSelector}
						>
							{Liferay.Language.get('browse')}
						</Button>
					</div>
				)}

				{file && (
					<div class="upload-pending">
						{sub(Liferay.Language.get('uploading-x'), [file.name])}

						<ProgressBar
							complete={file.completed}
							value={file.progress}
						/>

						{!file.completed && (
							<Button display="link" onClick={this.handleCancel}>
								{Liferay.Language.get('cancel')}
							</Button>
						)}
					</div>
				)}
			</div>
		);
	}
}

FileDropTarget.PROPS = {
	name: Config.string().value(Liferay.Language.get('csv')),
	onChange: Config.func().value(noop),
	uploadURL: Config.string().required()
};

FileDropTarget.STATE = {
	file: Config.object()
};

export default FileDropTarget;