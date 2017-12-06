import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import Icon from './Icon';

class ProgressBar extends Component {
	render() {
		const {complete, value} = this.props;

		const classes = getCN('progress-bar-root', 'progress-group', {
			'progress-success': complete,
			'progress-warning': !complete
		});

		const width = complete ? '100%' : `${value}%`;

		return (
			<div class={classes}>
				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style={{width}}
					/>
				</div>

				<div class="progress-group-addon">
					{
						do {
							if (complete) {
								<div class="progress-group-feedback">
									<Icon symbol="check-circle" />
								</div>;
							} else {
								`${Math.ceil(value)}%`;
							}
						}
					}
				</div>
			</div>
		);
	}
}

ProgressBar.PROPS = {
	complete: Config.bool().value(false),
	value: Config.number().value(0)
};

export default ProgressBar;