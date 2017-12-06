import autobind from 'autobind-decorator';
import Component from 'metal-jsx';

import Dropdown from 'shared/components/Dropdown';
import Item from '../components/Item';
import Row from '../components/Row';

class DropdownKit extends Component {
	@autobind
	handleItemTwo() {
		alert('Two');
	}

	@autobind
	handleItemThree() {
		alert('Three');
	}

	render() {
		return (
			<div>
				{Dropdown.ALIGNMENTS.map(align => (
					<Row key={align}>
						<Item>
							<Dropdown align={align} label={align}>
								<Dropdown.Item href="#one">
									{'One (Link)'}
								</Dropdown.Item>
								<Dropdown.Item onClick={this.handleItemTwo}>
									{'Two (Button)'}
								</Dropdown.Item>
								<Dropdown.Item
									hideOnClick
									onClick={this.handleItemThree}
								>
									{'Three (Hide On Click)'}
								</Dropdown.Item>
							</Dropdown>
						</Item>
					</Row>
				))}
			</div>
		);
	}
}

export default DropdownKit;