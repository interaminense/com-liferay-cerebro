import Component from 'metal-jsx';

import Button from 'shared/components/Button';
import Input from 'shared/components/Input';
import Item from '../components/Item';
import Row from '../components/Row';

class InputKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<Item>
						<Input placeholder="hello" />
					</Item>
				</Row>

				<Row>
					{Input.SIZES.map((size, index) => (
						<Item key={index}>
							<Input placeholder={size} size={size} />
						</Item>
					))}
				</Row>

				<Row>
					<Item>
						<Input.Group>
							<Input.Addon>{'$'}</Input.Addon>

							<Input placeholder="placeholder" />
						</Input.Group>
					</Item>

					<Item>
						<Input.Group>
							<Input placeholder="placeholder" />

							<Input.Addon>{'%'}</Input.Addon>
						</Input.Group>
					</Item>
				</Row>

				<Row>
					<Item>
						<Input.Group>
							<Input.Button>{'Click'}</Input.Button>

							<Input placeholder="placeholder" />
						</Input.Group>
					</Item>

					<Item>
						<Input.Group>
							<Input placeholder="placeholder" />

							<Input.Button>{'Click'}</Input.Button>
						</Input.Group>
					</Item>
				</Row>

				<Row>
					<Item>
						<Input.Group inset>
							<Input.Inset>{'To:'}</Input.Inset>

							<Input.GroupInput>
								<Input placeholder="placeholder" />
							</Input.GroupInput>
						</Input.Group>
					</Item>

					<Item>
						<Input.Group inset>
							<Input.GroupInput>
								<Input placeholder="placeholder" />
							</Input.GroupInput>

							<Input.Inset>
								<Button>{'Click'}</Button>
							</Input.Inset>
						</Input.Group>
					</Item>
				</Row>
			</div>
		);
	}
}

export default InputKit;