import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import Constants from 'shared/util/constants';
import getCN from 'classnames';
import {isFunction, noop, times} from 'lodash';

import Dropdown from './Dropdown';
import Icon from './Icon';
import {setUriQueryValue} from 'shared/util/router';

const DEFAULT_PAGE = Constants.pagination.cur;

const PAGE_BUFFER = 2;

class PaginationEllipsisItem extends Component {
	@autobind
	handleChange() {
		const {onChange, page} = this.props;

		onChange(page);
	}

	render() {
		return (
			<Dropdown.Item {...this.otherProps()} onClick={this.handleChange}>
				{this.props.children}
			</Dropdown.Item>
		);
	}
}

PaginationEllipsisItem.PROPS = {
	onChange: Config.func().value(noop),
	page: Config.number()
};

class PaginationEllipsis extends Component {
	render() {
		const {href, items, onChange} = this.props;

		return (
			<Dropdown
				align="topCenter"
				buttonProps={{
					display: 'link'
				}}
				label="..."
				showCaret={false}
				toggleClasses="page-link"
			>
				{items.map(item => (
					<PaginationEllipsisItem
						href={
							onChange
								? null
								: setUriQueryValue(href, 'page', item)
						}
						key={item}
						onChange={onChange}
						page={item}
					>
						{item}
					</PaginationEllipsisItem>
				))}
			</Dropdown>
		);
	}
}

PaginationEllipsis.PROPS = {
	href: Config.string(),
	items: Config.array(),
	onChange: Config.func()
};

class PaginationItem extends Component {
	@autobind
	handleChange() {
		const {onChange, page} = this.props;

		onChange(page);
	}

	render() {
		const {active, children, disabled, href, onChange, page} = this.props;

		const classes = getCN('page-item', {active, disabled});

		return (
			<li class={classes}>
				{
					do {
						if (page >= 0) {
							if (onChange) {
								<button
									class="page-link"
									onClick={this.handleChange}
								>
									{children}
								</button>;
							} else {
								<a class="page-link" href={href}>
									{children}
								</a>;
							}
						} else {
							children;
						}
					}
				}
			</li>
		);
	}
}

PaginationItem.PROPS = {
	active: Config.bool().value(false),
	disabled: Config.bool().value(false),
	href: Config.string(),
	onChange: Config.func().value(noop),
	page: Config.number().required()
};

class Pagination extends Component {
	getPages() {
		const {href, page, total, onChange} = this.props;

		const pages = times(total, i => i + 1);

		const frontBuffer = page - PAGE_BUFFER;

		if (frontBuffer > 1) {
			const start = 1;
			const numOfItems = frontBuffer - 2;

			const removedItems = pages.slice(start, start + numOfItems);

			pages.splice(
				start,
				numOfItems,
				<PaginationEllipsis
					href={href}
					items={removedItems}
					key="paginationEllipsis1"
					onChange={onChange}
				/>
			);
		}

		const backBuffer = page + PAGE_BUFFER;

		if (backBuffer < total) {
			const start = pages.indexOf(backBuffer + 1);
			const numOfItems = total - backBuffer - 1;

			const removedItems = pages.slice(start, start + numOfItems);

			pages.splice(
				start,
				numOfItems,
				<PaginationEllipsis
					href={href}
					items={removedItems}
					key="paginationEllipsis2"
					onChange={onChange}
				/>
			);
		}

		return pages;
	}

	render() {
		const {href, onChange, page, total} = this.props;

		return (
			<ul class="pagination pagination-root">
				<PaginationItem
					disabled={page === 1}
					href={setUriQueryValue(href, 'page', page - 1)}
					onChange={onChange}
					page={page - 1}
				>
					<Icon symbol="angle-left" />
				</PaginationItem>

				{this.getPages().map((item, index) => (
					<PaginationItem
						active={page === item}
						href={setUriQueryValue(href, 'page', item)}
						key={index}
						onChange={onChange}
						page={isFunction(item) ? -1 : item}
					>
						{item}
					</PaginationItem>
				))}

				<PaginationItem
					disabled={page === total}
					href={setUriQueryValue(href, 'page', page + 1)}
					onChange={onChange}
					page={page + 1}
				>
					<Icon symbol="angle-right" />
				</PaginationItem>
			</ul>
		);
	}
}

Pagination.PROPS = {
	href: Config.string(),
	onChange: Config.func(),
	page: Config.number().value(DEFAULT_PAGE),
	total: Config.number()
};

export default Pagination;