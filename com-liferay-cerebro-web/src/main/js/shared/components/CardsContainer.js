import Component from 'metal-jsx';

class CardsContainer extends Component {
	render() {
		return (
			<div class="cards-container-root">
				{this.props.children.map((child, i) => (
					<div class="card-wrapper" key={i}>
						{child}
					</div>
				))}
			</div>
		);
	}
}

export default CardsContainer;