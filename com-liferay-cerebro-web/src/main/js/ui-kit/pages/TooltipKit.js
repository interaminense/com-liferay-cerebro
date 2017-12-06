import Component from 'metal-jsx';

import Item from '../components/Item';
import Row from '../components/Row';

class TooltipKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<Item>
						<div
							data-tooltip
							data-tooltip-align="left"
							title="show tooltip"
						>
							{'Show tooltip left'}
						</div>
					</Item>
					<Item>
						<div
							data-tooltip
							data-tooltip-align="right"
							title="show tooltip"
						>
							{'Show tooltip right'}
						</div>
					</Item>
					<Item>
						<div
							data-tooltip
							data-tooltip-align="top"
							title="show tooltip"
						>
							{'Show tooltip top'}
						</div>
					</Item>
					<Item>
						<div
							data-tooltip
							data-tooltip-align="bottom"
							title="show tooltip"
						>
							{'Show tooltip bottom'}
						</div>
					</Item>
				</Row>
			</div>
		);
	}
}

export default TooltipKit;