import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import {noop} from 'lodash';

import Dropdown from './Dropdown';
import NavBar from './NavBar';
import analyticsConstants from 'shared/util/constants';
import Pagination from './Pagination';
import {setUriQueryValue} from 'shared/util/router';
import {sub} from '../util/lang';

const {deltaValues} = analyticsConstants.pagination;

const SIZES = ['sm', 'lg'];

class DeltaItem extends Component {
	@autobind
	handleChange() {
		const {delta, onChange} = this.props;

		onChange(delta);
	}

	render() {
		return (
			<Dropdown.Item {...this.otherProps()} onClick={this.handleChange}>
				{this.props.children}
			</Dropdown.Item>
		);
	}
}

DeltaItem.PROPS = {
	delta: Config.number().required(),
	onChange: Config.func().value(noop)
};

class PaginationBar extends Component {
	render() {
		const {
			deltas,
			href,
			onDeltaChange,
			onPageChange,
			page,
			selectedDelta,
			size,
			totalItems
		} = this.props;

		const classes = getCN('pagination-bar-root', {
			[`pagination-${size}`]: size
		});

		const start = page * selectedDelta;

		return (
			<NavBar elementClasses={classes}>
				<Dropdown
					align="bottomLeft"
					buttonProps={{
						size: 'sm'
					}}
					elementClasses="pagination-items-per-page"
					label={selectedDelta}
				>
					{deltas.map(item => (
						<DeltaItem
							delta={item}
							href={
								onDeltaChange
									? null
									: setUriQueryValue(href, 'delta', item)
							}
							key={item}
							onChange={onDeltaChange}
						>
							{item}
						</DeltaItem>
					))}
				</Dropdown>

				<div class="pagination-results">
					{sub(Liferay.Language.get('showing-x-to-x-of-x-entries'), [
						start - selectedDelta + 1,
						Math.min(start, totalItems),
						totalItems
					])}
				</div>

				<Pagination
					href={href}
					onChange={onPageChange}
					page={page}
					total={Math.ceil(totalItems / selectedDelta)}
				/>
			</NavBar>
		);
	}
}

PaginationBar.PROPS = {
	deltas: Config.array().value(deltaValues),
	href: Config.string(),
	onDeltaChange: Config.func(),
	onPageChange: Config.func(),
	page: Config.number(),
	selectedDelta: Config.number().value(deltaValues[1]),
	size: Config.oneOf(SIZES),
	totalItems: Config.number()
};

PaginationBar.STATE = {};

export default PaginationBar;