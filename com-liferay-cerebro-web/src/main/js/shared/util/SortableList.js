import autobind from 'autobind-decorator';
import core from 'metal';
import {Config, State} from 'metal-state';
import {Drag, DragDrop} from 'metal-drag-drop';
import {indexOf} from 'lodash';

const {DRAG, END} = DragDrop.Events;

class SortableList extends State {
	constructor(config) {
		super(config);

		const {axis, container, handles, sources, targets} = this;

		this._dragDrop = new DragDrop({
			axis,
			container,
			dragPlaceholder: Drag.Placeholder.CLONE,
			handles,
			sources,
			targets
		});

		this._dragDrop.on(DRAG, this.handleDrag);
		this._dragDrop.on(END, this.handleDragEnd);
	}

	getMidY(node) {
		let y = null;

		if (node) {
			const {height, top} = node.getClientRects()[0];

			y = top + height / 2 + window.scrollY;
		}

		return y;
	}

	@autobind
	getNodeIndex(node) {
		const sources = this.toElements(this._dragDrop.sources);

		return indexOf(sources, node);
	}

	@autobind
	handleDrag(data) {
		const {placeholder} = data;

		if (placeholder && !placeholder.style.width) {
			this.setNodeWidth(placeholder);
		}
	}

	@autobind
	handleDragEnd(data) {
		const {placeholder, source, target} = data;

		if (placeholder && source && target) {
			this.resetNodeWidth(placeholder);

			const placeholderPos = this.getMidY(placeholder);
			const targetPos = this.getMidY(target);

			this.handleItemsChange({
				placeBefore: placeholderPos < targetPos,
				sourceIndex: this.getNodeIndex(source),
				targetIndex: this.getNodeIndex(target)
			});
		}
	}

	@autobind
	handleItemsChange({placeBefore, sourceIndex, targetIndex}) {
		const {items} = this;

		if (!placeBefore) {
			targetIndex++;
		}

		if (sourceIndex !== targetIndex && sourceIndex + 1 !== targetIndex) {
			const newItems = [];

			const sourceItem = items[sourceIndex];

			items.forEach((item, i) => {
				if (i === targetIndex) {
					newItems.push(sourceItem);
				}

				if (i !== sourceIndex) {
					newItems.push(item);
				}
			});

			if (targetIndex === items.length) {
				newItems.push(sourceItem);
			}

			this.items = newItems;

			this.onItemsChange(newItems);
		}
	}

	resetNodeWidth(node) {
		node.style.width = '';
	}

	setNodeWidth(node) {
		node.style.width = `${node.parentElement.clientWidth}px`;
	}

	@autobind
	toElements(elementOrSelector) {
		let elements = [];

		if (core.isString(elementOrSelector)) {
			const matched = this._dragDrop.container.querySelectorAll(
				elementOrSelector
			);

			elements = Array.prototype.slice.call(matched, 0);
		} else if (elementOrSelector) {
			elements = [elementOrSelector];
		}

		return elements;
	}
}

SortableList.STATE = {
	axis: Config.oneOf(['x', 'y']),
	container: Config.oneOfType([Config.string(), Config.object()]),
	handles: Config.string().value('.handle'),
	items: Config.array().value([]),
	onItemsChange: Config.func(),
	sources: Config.string(),
	targets: Config.string()
};

export default SortableList;