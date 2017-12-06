import Component, {Config} from 'metal-jsx';

export default load => {
	class Bundle extends Component {
		created() {
			if (Bundle.component) {
				this.state.component = Bundle.component;
			} else {
				load().then(module => {
					this.state.component = module.default;
					Bundle.component = module.default;
				});
			}
		}

		render() {
			const Component = this.state.component;

			if (Component) {
				return <Component {...this.props} />;
			}
		}
	}

	Bundle.STATE = {
		component: Config.any().value(null)
	};

	return Bundle;
};