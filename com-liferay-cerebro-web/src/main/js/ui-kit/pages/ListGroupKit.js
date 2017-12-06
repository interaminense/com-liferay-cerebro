import Component from 'metal-jsx';

import ListGroup from 'shared/components/list-group';
import Row from '../components/Row';

class ListGroupKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<ListGroup>
						<ListGroup.Item flex>
							<ListGroup.ItemField>
								{'Item 1'}
							</ListGroup.ItemField>

							<ListGroup.ItemField>
								{'ItemField'}
							</ListGroup.ItemField>

							<ListGroup.ItemField>
								{'ItemField'}
							</ListGroup.ItemField>

							<ListGroup.ItemField>
								{'ItemField'}
							</ListGroup.ItemField>
						</ListGroup.Item>

						<ListGroup.Item>
							<ListGroup.ItemField>
								{'Item 2'}
							</ListGroup.ItemField>
						</ListGroup.Item>
					</ListGroup>
				</Row>
			</div>
		);
	}
}

export default ListGroupKit;