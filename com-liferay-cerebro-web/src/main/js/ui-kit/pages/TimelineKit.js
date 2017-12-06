import Component from 'metal-jsx';

import Timeline from 'shared/components/Timeline';
import Row from '../components/Row';

class TimelineKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<Timeline
						activeIndex={1}
						items={[
							{
								title:
									'This is a really long title for this step'
							},
							{title: 'Step 2'},
							{title: 'Step 3'},
							{title: 'Step 4'}
						]}
					/>
				</Row>
			</div>
		);
	}
}

export default TimelineKit;