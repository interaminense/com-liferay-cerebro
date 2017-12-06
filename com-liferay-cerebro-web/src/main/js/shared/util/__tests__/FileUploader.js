/* eslint-disable no-underscore-dangle */

import FileUploader from '../FileUploader';

describe('FileUploader', () => {
	let uploader;

	afterEach(() => {
		if (uploader) {
			uploader.destroy();
		}
	});

	it('renders', () => {
		uploader = new FileUploader().render();

		expect(uploader).toBeTruthy();

		expect(document.body.innerHTML).toContain('<input');
		expect(document.body.innerHTML).toContain('type="file"');
		expect(document.body.innerHTML).toContain('hidden');
	});

	it('should remove input', () => {
		uploader = new FileUploader().render();

		uploader.destroy();

		expect(document.body.innerHTML).toBe('');
	});

	it('should set constants from config', () => {
		const CONSTANTS = {
			onChange: jest.fn(),
			onError: jest.fn(),
			uploadURL: 'test/url/path'
		};

		uploader = new FileUploader(CONSTANTS).render();

		expect(uploader.onChange).toBe(CONSTANTS.onChange);
		expect(uploader.onError).toBe(CONSTANTS.onError);
		expect(uploader.uploadURL).toBe(CONSTANTS.uploadURL);
	});

	it('should trigger file selector', () => {
		const spy = jest.fn();

		uploader = new FileUploader().render();

		uploader._inputNode.click = spy;

		uploader.openDialog();

		expect(spy).toBeCalled();
	});

	it('should not call onError', () => {
		const file = new File([''], 'test.jpg', {type: 'foo'});

		const spy = jest.fn();

		uploader = new FileUploader({
			onError: spy
		}).render();

		uploader.upload([file]);

		expect(spy).not.toBeCalled();
	});

	describe('onProgress', () => {
		const args = [
			'',
			1,
			{
				target: {}
			}
		];

		it('should call onChange', () => {
			const spy = jest.fn();

			uploader = new FileUploader({
				onChange: spy
			}).render();

			uploader.onProgress(...args);

			expect(spy).toBeCalled();
		});
	});

	it('should call `selectFiles`', () => {
		uploader = new FileUploader().render();

		uploader.selectFiles = jest.fn();

		uploader.addFiles();

		expect(uploader.selectFiles).toHaveBeenCalled();
	});

	it('should call `onChange`', () => {
		uploader = new FileUploader({
			onChange: jest.fn()
		}).render();

		const event = {
			target: {}
		};

		uploader.onLoad('foo', 1, event);

		expect(uploader.onChange).toHaveBeenCalled();
	});

	it('should call `onChange`', () => {
		uploader = new FileUploader({
			onChange: jest.fn()
		}).render();

		uploader.onStart('foo', 1, 'bar');

		expect(uploader.onChange).toHaveBeenCalled();
	});

	it('should call `upload`', () => {
		uploader = new FileUploader().render();

		uploader.upload = jest.fn();

		const files = {
			target: {
				files: [{}]
			}
		};

		uploader.selectFiles(files);

		expect(uploader.upload).toHaveBeenCalled();
	});

	it('should clear the FileUploaders value on openDialog', () => {
		const uploaderValue = 'tests';

		uploader = new FileUploader().render();

		uploader._inputNode.value = uploaderValue;

		expect(uploader._inputNode.value).toBe(uploaderValue);

		uploader.openDialog();

		expect(uploader._inputNode.value).toBe('');
	});
});