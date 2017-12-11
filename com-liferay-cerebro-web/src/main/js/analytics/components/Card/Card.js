import JSXComponent from 'metal-jsx';
import {CardTitle, CardIcon, CardNumber} from './components';

class Card extends JSXComponent {
	render() {
		return (
			<div class={this.props.className}>
				<CardIcon
					className={this.props.className}
					icon={this.props.icon}
				/>
				<CardNumber
					className={this.props.className}
					number={this.props.number}
				/>
				<CardTitle
					className={this.props.className}
					title={this.props.title}
				/>
			</div>
		);
	}
}

export default Card;

Card.PROPS = {
	className: {
		value: 'card-dashboard'
	}
};