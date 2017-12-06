import {isArray, noop, uniqueId} from 'lodash';

import Constants from './constants';

const {portletNamespace} = Constants;

export default class FileUploader {
	constructor(config = {}) {
		this.selectFiles = this.selectFiles.bind(this);

		this.onChange = config.onChange || noop;
		this.onError = config.onError || noop;
		this.uploadURL = config.uploadURL;
	}

	render() {
		const id = uniqueId(`${portletNamespace}fileUploader`);

		let inputNode = document.getElementById(id);

		if (!inputNode) {
			inputNode = document.createElement('input');

			inputNode.setAttribute('hidden', true);
			inputNode.setAttribute('id', id);
			inputNode.setAttribute('type', 'file');

			document.body.appendChild(inputNode);

			inputNode.addEventListener('change', this.selectFiles);
		}

		this._inputNode = inputNode;

		return this;
	}

	destroy() {
		if (this._inputNode) {
			this._inputNode.removeEventListener('change', this.selectFiles);

			this._inputNode.remove();
		}
	}

	addFiles(files) {
		this.selectFiles(files);
	}

	clearInputData() {
		this._inputNode.value = '';

		if (this._reader) {
			this._reader.abort();
		}
	}

	openDialog() {
		const {_inputNode} = this;

		this.clearInputData();

		_inputNode.click();
	}

	emitError() {
		const {onError} = this;

		if (onError) {
			onError(
				Liferay.Language.get(
					'an-unexpected-error-occurred-while-uploading-your-file'
				)
			);
		}
	}

	onLoad(name, _id, event) {
		this.onChange({
			_id,
			completed: true,
			name,
			response: event.target.response
		});
	}

	onProgress(name, _id, event) {
		const {loaded, total} = event;

		this.onChange({
			_id,
			name,
			progress: loaded / total * 100
		});
	}

	onStart(name, _id, url) {
		this.onChange({
			_id,
			name,
			progress: 0,
			url
		});
	}

	selectFiles(files) {
		if (!isArray(files) && !(files instanceof FileList)) {
			files = files.target.files;
		}

		const filesArr = [];

		for (let i = 0; i < files.length; i++) {
			filesArr.push(files[i]);
		}

		this.upload(filesArr);
	}

	sendRequest(file) {
		this._reader = new FileReader();

		this._reader.onload = event => {
			const localFilePath = event.target.result;

			const request = new XMLHttpRequest();

			const {name} = file;

			request.open('PUT', `${this.uploadURL}/${name}`, true);

			request.setRequestHeader('content-type', 'multipart/form-data');

			const id = uniqueId('fileUpload');

			request.addEventListener(
				'error',
				this.emitError.bind(this, 'uploadError')
			);
			request.addEventListener('load', this.onLoad.bind(this, name, id));
			request.upload.addEventListener(
				'progress',
				this.onProgress.bind(this, name, id)
			);

			this.onStart(name, id, localFilePath);

			request.send(file);
		};

		this._reader.readAsDataURL(file);
	}

	upload(files) {
		files.forEach(file => {
			this.sendRequest(file);
		});
	}
}