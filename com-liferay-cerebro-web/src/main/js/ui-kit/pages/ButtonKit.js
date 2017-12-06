import Component from 'metal-jsx';

import Button from 'shared/components/Button';
import Item from '../components/Item';
import Row from '../components/Row';

class ButtonKit extends Component {
	render() {
		return (
			<div>
				<Row>
					{Button.DISPLAYS.map((display, index) => (
						<Item key={index}>
							<Button display={display}>{display}</Button>
						</Item>
					))}
				</Row>
				<Row>
					{Button.DISPLAYS.map((display, index) => (
						<Item key={index}>
							<Button display={display} outline>
								{display} {'outline'}
							</Button>
						</Item>
					))}
				</Row>
				<Row>
					{Button.SIZES.map((size, index) => (
						<Item key={index}>
							<Button size={size}>{size}</Button>
						</Item>
					))}
				</Row>

				{Button.SIZES.map((size, index) => (
					<Item key={index}>
						<Button block size={size}>
							{size} {'block'}
						</Button>
					</Item>
				))}
			</div>
		);
	}
}

export default ButtonKit;