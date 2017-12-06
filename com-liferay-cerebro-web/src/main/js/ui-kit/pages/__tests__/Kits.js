import * as fs from 'fs';
import * as path from 'path';

import {renderWithStore} from 'test/mock-store';

describe('Kits', () => {
	let component;

	const files = fs
		.readdirSync(path.resolve(__dirname, '..'))
		.filter(file => file.match(/Kit.js$/));

	afterEach(() => {
		if (component) {
			component.dispose();
		}
	});

	files.forEach(file => {
		const kitName = file.replace('.js', '');

		describe(kitName, () => {
			const Kit = require(`../${file}`).default;

			it('should render', () => {
				component = renderWithStore(Kit);

				expect(component).toBeTruthy();
			});
		});
	});
});