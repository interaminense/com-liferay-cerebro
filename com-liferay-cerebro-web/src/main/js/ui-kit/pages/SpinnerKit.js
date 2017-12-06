import Component from 'metal-jsx';

import Spinner from 'shared/components/Spinner';
import Item from '../components/Item';
import Row from '../components/Row';

class SpinnerKit extends Component {
	render() {
		return (
			<div>
				{Spinner.DISPLAYS.map((display, i) => (
					<Row key={i}>
						{Spinner.SIZES.map((size, j) => (
							<Item key={j}>
								<Spinner display={display} size={size} />
							</Item>
						))}
					</Row>
				))}
			</div>
		);
	}
}

export default SpinnerKit;