import Component from 'metal-jsx';

import EntityList from 'shared/components/EntityList';
import Row from '../components/Row';

class EntityListKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<EntityList
						items={[
							{
								id: 1,
								name: 'Portland',
								properties: {global: {total: 321}}
							},
							{
								id: 2,
								name: 'San Diego',
								properties: {global: {total: 231}}
							},
							{
								id: 3,
								name: 'Seattle',
								properties: {global: {total: 123}}
							}
						]}
					/>
				</Row>
			</div>
		);
	}
}

export default EntityListKit;