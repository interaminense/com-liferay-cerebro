import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

class Body extends Component {
	render() {
		const {title} = this.props;

		return (
			<div class="card-body">
				{title && (
					<div class="card-title" key="cardTitle">
						{title}
					</div>
				)}

				{title && <div class="card-divider" key="cardDivider" />}

				{this.props.children}
			</div>
		);
	}
}

Body.PROPS = {
	title: Config.string()
};

class Row extends Component {
	render() {
		return <div class="card-row">{this.props.children}</div>;
	}
}

class Title extends Component {
	render() {
		return <div class="card-title">{this.props.children}</div>;
	}
}

class Card extends Component {
	render() {
		const {children, horizontal} = this.props;

		const classes = getCN('card', {
			horizontal
		});

		return (
			<div {...this.otherProps()} class={classes}>
				{children}
			</div>
		);
	}
}

Card.PROPS = {
	horizontal: Config.bool()
};

Card.Body = Body;
Card.Row = Row;
Card.Title = Title;

export default Card;