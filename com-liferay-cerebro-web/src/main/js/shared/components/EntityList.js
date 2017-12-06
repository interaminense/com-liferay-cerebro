import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';
import {isNil} from 'lodash';
import {Map} from 'immutable';

import Avatar from './Avatar';
import Checkbox from './Checkbox';
import Constants from '../util/constants';
import Icon from './Icon';
import ListGroup from './list-group';
import Spinner from './Spinner';
import Sticker, {getDisplayForId} from './Sticker';
import {getRouteName} from 'shared/util/router';
import {getTypeLangKey} from 'shared/util/lang';
import {sub} from '../util/lang';

const {
	account,
	accountsSegment,
	individual,
	individualsSegment
} = Constants.entityTypes;

class EntityListItem extends Component {
	created() {
		this.state.checked = this.props.initialChecked;
	}

	getSymbol() {
		const {type} = this.props.entity;

		switch (type) {
			case account:
				return 'faro-contacts-segments';
			case accountsSegment:
				return 'faro-contacts-segments';
			case individualsSegment:
				return 'faro-contacts-individuals';
		}
	}

	@autobind
	handleClick(event) {
		const {
			props: {entity, onCheck},
			refs: {nameLink},
			state: {checked}
		} = this;

		if (event.target !== nameLink) {
			this.state.checked = !checked;

			onCheck(entity.id, !checked);
		}
	}

	syncInitialChecked(newVal) {
		this.state.checked = newVal;
	}

	render() {
		const {allowCheckbox, entity} = this.props;

		const {count, id, name, properties, type} = entity;

		const {
			companyName,
			firstName,
			jobTitle,
			lastName,
			portraitURL
		} = properties;

		return (
			<ListGroup.Item flex onClick={this.handleClick}>
				{allowCheckbox && (
					<ListGroup.ItemField>
						<Checkbox checked={this.state.checked} />
					</ListGroup.ItemField>
				)}

				<ListGroup.ItemField>
					{
						do {
							if (type === individual) {
								<Avatar
									firstName={firstName}
									lastName={lastName}
									portraitURL={portraitURL}
								/>;
							} else {
								<Sticker
									display={getDisplayForId(id)}
									symbol={this.getSymbol()}
								/>;
							}
						}
					}
				</ListGroup.ItemField>

				<ListGroup.ItemField expand>
					<strong>
						<a
							class="list-group-link"
							href={`/contacts/${getRouteName(type)}/${id}`}
							ref="nameLink"
						>
							{name}
						</a>
					</strong>

					<div>
						{type === Constants.entityTypes.individual
							? sub(Liferay.Language.get('x-at-x'), [
									jobTitle,
									companyName
								])
							: sub(Liferay.Language.get('x-individuals'), [
									count
								])}
					</div>
				</ListGroup.ItemField>

				{allowCheckbox && (
					<ListGroup.ItemField>
						<Icon symbol="ellipsis-v" />
					</ListGroup.ItemField>
				)}
			</ListGroup.Item>
		);
	}
}

EntityListItem.PROPS = {
	allowCheckbox: Config.bool(),
	entity: Config.object(),
	initialChecked: Config.bool(),
	onCheck: Config.func()
};

EntityListItem.STATE = {
	checked: Config.bool().value(false)
};

class EntityList extends Component {
	render() {
		const {
			allowCheckbox,
			checkedItemsIMap,
			entityType,
			items,
			loading,
			noItemsHeader,
			onItemCheck,
			total
		} = this.props;

		const noItems = total === 0;

		const classes = getCN('entity-list-root', {'no-items': noItems});

		return (
			<ListGroup elementClasses={classes} noBorder={!allowCheckbox}>
				{!isNil(entityType) && (
					<ListGroup.Item flex header key="header">
						<ListGroup.ItemField>
							{noItems && noItemsHeader
								? noItemsHeader
								: getTypeLangKey(entityType)}
						</ListGroup.ItemField>

						<ListGroup.ItemField>
							{sub(Liferay.Language.get('x-items'), [total])}
						</ListGroup.ItemField>
					</ListGroup.Item>
				)}

				{loading && <Spinner />}

				{items.map(item => (
					<EntityListItem
						allowCheckbox={allowCheckbox}
						entity={item}
						initialChecked={checkedItemsIMap.get(item.id)}
						key={item.id}
						onCheck={onItemCheck}
					/>
				))}
			</ListGroup>
		);
	}
}

EntityList.PROPS = {
	allowCheckbox: Config.bool().value(true),
	baseHref: Config.string(),
	checkedItemsIMap: Config.instanceOf(Map).value(Map()),
	entityType: Config.number(),
	items: Config.array(),
	loading: Config.bool(),
	noItemsHeader: Config.string(),
	onItemCheck: Config.func(),
	total: Config.number()
};

export default EntityList;