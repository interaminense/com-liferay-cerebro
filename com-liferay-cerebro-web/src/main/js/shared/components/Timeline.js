import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import Icon from './Icon';

class Timeline extends Component {
	render() {
		const {activeIndex, items} = this.props;

		return (
			<div class="timeline-root">
				{items.map(({href, title}, i) => {
					const active = activeIndex === i;
					const previousStep = activeIndex > i;

					const step = i + 1;

					return [
						<a
							class={getCN('step', {
								active,
								'previous-step': previousStep
							})}
							href={href}
							key={i}
						>
							<div class="title">{title}</div>

							<div class="circle">
								{!previousStep && step}

								{previousStep && <Icon symbol="check" />}
							</div>
						</a>,
						items.length !== i + 1 && (
							<span
								class={getCN('bar', {filled: previousStep})}
								key={`bar-${i}`}
							/>
						)
					];
				})}
			</div>
		);
	}
}

Timeline.PROPS = {
	activeIndex: Config.number(),
	items: Config.array()
};

export default Timeline;