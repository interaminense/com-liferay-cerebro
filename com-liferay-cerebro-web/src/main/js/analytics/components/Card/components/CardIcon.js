import JSXComponent from 'metal-jsx';
import {Icon} from '../../../components';

class CardIcon extends JSXComponent {
	render() {
		return (
			<div class={`${this.props.className}__icon`}>
				<Icon symbol={this.props.icon} />
			</div>
		);
	}
}

export default CardIcon;