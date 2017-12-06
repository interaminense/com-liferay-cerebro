import Component, {Config} from 'metal-jsx';

import Nav from 'shared/components/Nav';
import Row from '../components/Row';

const items = ['Foo', 'Bar', 'Baz'];

class NavKit extends Component {
	created() {
		window.addEventListener(
			'hashchange',
			() => (this.state.activeHash = window.location.hash.substring(1))
		);
	}

	render() {
		const {activeHash} = this.state;

		return (
			<div>
				<Row>
					<Nav>
						{items.map((item, index) => (
							<Nav.Item
								active={index == activeHash}
								href={`#${index}`}
								key={index}
							>
								{item}
							</Nav.Item>
						))}
					</Nav>
				</Row>

				<Row>
					<Nav vertical>
						{items.map((item, index) => (
							<Nav.Item
								active={index == activeHash}
								href={`#${index}`}
								key={index}
							>
								{item}
							</Nav.Item>
						))}
					</Nav>
				</Row>

				<Row>
					<Nav display="pills">
						{items.map((item, index) => (
							<Nav.Item
								active={index == activeHash}
								href={`#${index}`}
								key={index}
							>
								{item}
							</Nav.Item>
						))}
					</Nav>
				</Row>

				<Row>
					<Nav display="tabs">
						{items.map((item, index) => (
							<Nav.Item
								active={index == activeHash}
								href={`#${index}`}
								key={index}
							>
								{item}
							</Nav.Item>
						))}
					</Nav>
				</Row>

				<Row>
					<Nav display="underline">
						{items.map((item, index) => (
							<Nav.Item
								active={index == activeHash}
								href={`#${index}`}
								key={index}
							>
								{item}
							</Nav.Item>
						))}
					</Nav>
				</Row>
			</div>
		);
	}
}

NavKit.STATE = {
	activeHash: Config.string().value('0')
};

export default NavKit;