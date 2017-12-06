import Component, {Config} from 'metal-jsx';

class EntityTabularList extends Component {
	render() {
		return (
			<ul class="tabular-list-group">
				{this.props.items.map(({displayURL, name}, index) => (
					<li class="list-group-item" key={index}>
						<div class="list-group-item-content">
							<a href={displayURL}>{name}</a>
						</div>
					</li>
				))}
			</ul>
		);
	}
}

EntityTabularList.PROPS = {
	items: Config.array()
};

export default EntityTabularList;