import Component from 'metal-jsx';
import {createStore} from 'redux';
import {Provider} from 'metal-redux';

import OverlayRenderer from 'shared/components/OverlayRenderer';
import reducer from 'shared/reducers';

export default function renderWithOverlay(TestComponent, props) {
	class TestWithOverlay extends Component {
		render() {
			return (
				<Provider {...this.otherProps()}>
					<OverlayRenderer />

					<TestComponent ref="child" {...props} />
				</Provider>
			);
		}
	}

	return new TestWithOverlay({
		store: createStore(reducer)
	});
}