import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

class Body extends Component {
	render() {
		const classes = getCN('modal-body', {
			'inline-scroller': this.props.inlineScroller
		});

		return <div class={classes}>{this.props.children}</div>;
	}
}

Body.PROPS = {
	inlineScroller: Config.bool()
};

export default Body;