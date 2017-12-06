import Component from 'metal-jsx';
import {noop} from 'lodash';

import Alert from 'shared/components/Alert';
import Item from '../components/Item';
import Row from '../components/Row';

class AlertKit extends Component {
	render() {
		return (
			<div>
				<Row>
					{Alert.TYPES.map(type => (
						<Item key={type}>
							<Alert onClose={noop} type={type}>
								{type}
							</Alert>
						</Item>
					))}
				</Row>

				<Row>
					<Item>
						<Alert
							onClose={noop}
							title="Basic Alert"
							type={Alert.TYPES[2]}
						>
							{
								'This is a basic alert. It has no max width, compared to the notification alert.'
							}
						</Alert>
					</Item>
				</Row>

				<Row>
					<Item>
						<Alert
							notification
							onClose={noop}
							title="Notification Alert"
							type={Alert.TYPES[2]}
						>
							{
								'This is a notification alert. It has a max width, compared to the basic alert.'
							}
						</Alert>
					</Item>
				</Row>

				<Row>
					<Item>
						<Alert
							onClose={noop}
							title="Alert with a link"
							type={Alert.TYPES[2]}
						>
							{'check out this link'}
							<Alert.AlertLink href="#">
								{'click me'}
							</Alert.AlertLink>
						</Alert>
					</Item>
				</Row>
			</div>
		);
	}
}

export default AlertKit;