import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import {Map} from 'immutable';
import {noop} from 'lodash';

import Button from './Button';
import Icon from 'shared/components/Icon';
import Constants from 'shared/util/constants';
import Spinner from 'shared/components/Spinner';
import SelectItemsList from 'shared/components/SelectItemsList';
import Input from 'shared/components/Input';
import Modal from './modal';
import Nav from 'shared/components/Nav';
import NavBar from 'shared/components/NavBar';
import {sub} from 'shared/util/lang';

const {orderAscending, orderDescending} = Constants.pagination;

const DELTA = 10;

class SelectItemsModal extends Component {
	created() {
		this._page = 1;
	}

	attached() {
		const {selectedItems} = this.props;

		if (selectedItems && selectedItems.length) {
			let {selectedItemsIMap} = this.state;

			selectedItems.forEach(item => {
				selectedItemsIMap = selectedItemsIMap.set(item.id, true);
			});

			this.state.selectedItemsIMap = selectedItemsIMap;
		}

		this.getItems();
	}

	getItems(query = this.refs.searchInput.element.value) {
		const {dataSourceFn} = this.props;

		dataSourceFn(
			this._page,
			DELTA,
			query,
			this.state.reverseSort ? orderDescending : orderAscending
		).then(({items, total}) => {
			this.setState({
				items: [...this.state.items, ...items],
				loading: false,
				total
			});

			this._page++;
		});
	}

	@autobind
	handleLoadMoreClick() {
		this.state.loading = true;

		this.getItems();
	}

	@autobind
	handleNewFilter(event) {
		this._page = 1;

		this.setState(
			{
				items: [],
				loading: true
			},
			() => this.getItems(event.target.value)
		);
	}

	@autobind
	handleSelect(id, val) {
		this.state.selectedItemsIMap = this.state.selectedItemsIMap.set(
			id,
			val
		);
	}

	@autobind
	handleSortOrder() {
		this._page = 1;

		this.setState(
			{
				items: [],
				loading: true,
				reverseSort: !this.state.reverseSort
			},
			() => this.getItems()
		);
	}

	@autobind
	handleSubmit() {
		const {
			props: {onClose, onSubmit},
			state: {items, selectedItemsIMap}
		} = this;

		onSubmit(items.filter(item => selectedItemsIMap.get(item.id)));

		onClose();
	}

	render() {
		const {
			props: {onClose, title},
			state: {items, loading, selectedItemsIMap, total}
		} = this;

		return (
			<Modal
				elementClasses="select-items-modal-root"
				size="lg"
				{...this.otherProps()}
			>
				<Modal.Header onClose={onClose} title={title} />

				<div>
					<NavBar display="light">
						<Nav>
							<Nav.Item>
								<Button
									display="link"
									onClick={this.handleSortOrder}
								>
									<Icon symbol="import-export" />
								</Button>
							</Nav.Item>
						</Nav>

						<div class="navbar-form navbar-form-autofit">
							<Input.Group inset>
								<Input.GroupInput>
									<Input
										onInput={this.handleNewFilter}
										placeholder={Liferay.Language.get(
											'search'
										)}
										ref="searchInput"
									/>
								</Input.GroupInput>

								<Input.Inset>
									<Icon symbol="search" />
								</Input.Inset>
							</Input.Group>
						</div>
					</NavBar>

					<div class="scroll-container">
						<div class="items-header">
							{!!total &&
								sub(Liferay.Language.get('x-fields'), [total])}
						</div>

						<SelectItemsList
							items={items}
							onSelect={this.handleSelect}
							selectedItemsIMap={selectedItemsIMap}
						/>

						{items.length < total && (
							<div class="load-more-container">
								<Button
									elementClasses={loading ? 'loading' : ''}
									onClick={this.handleLoadMoreClick}
								>
									{!loading &&
										Liferay.Language.get('load-more')}

									{loading && <Spinner />}
								</Button>
							</div>
						)}
					</div>
				</div>

				<Modal.Footer>
					<Button onClick={onClose}>
						{Liferay.Language.get('cancel')}
					</Button>

					<Button display="primary" onClick={this.handleSubmit}>
						{Liferay.Language.get('select')}
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

SelectItemsModal.PROPS = {
	dataSourceFn: Config.func().required(),
	onClose: Config.func().value(noop),
	onSubmit: Config.func().value(noop),
	selectedItems: Config.array().value([]),
	title: Config.string().value(Liferay.Language.get('select-fields'))
};

SelectItemsModal.STATE = {
	items: Config.array().value([]),
	loading: Config.bool().value(true),
	reverseSort: Config.bool().value(false),
	searchInput: Config.string().value(''),
	selectedItemsIMap: Config.instanceOf(Map).value(Map()),
	total: Config.number()
};

export default SelectItemsModal;