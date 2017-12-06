import Component from 'metal-jsx';

import Avatar from 'shared/components/Avatar';
import Item from '../components/Item';
import Row from '../components/Row';

class AvatarKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<Item>
						<Avatar portraitURL="http://i.imgur.com/G5pfP.jpg" />
					</Item>

					<Item>
						<Avatar firstName="Foo" />
					</Item>

					<Item>
						<Avatar firstName="Foo" lastName="Bar" />
					</Item>
				</Row>

				<Row>
					{Avatar.COLORS.map((item, index) => (
						<Item key={index}>
							<Avatar
								colorId={index}
								firstName="Foo"
								lastName="Bar"
							/>
						</Item>
					))}
				</Row>

				<Row>
					{Avatar.SIZES.map((size, index) => (
						<Item key={index}>
							<Avatar
								firstName="Foo"
								lastName="Bar"
								size={size}
							/>
						</Item>
					))}
				</Row>
			</div>
		);
	}
}

export default AvatarKit;