export class OverlayRegistry {
	constructor() {
		this._map = new Map();
	}

	add(id, content) {
		this._map.set(id, content);
	}

	clear() {
		this._map.clear();
	}

	get(id) {
		return this._map.get(id);
	}

	remove(id) {
		this._map.delete(id);
	}
}

export default new OverlayRegistry();