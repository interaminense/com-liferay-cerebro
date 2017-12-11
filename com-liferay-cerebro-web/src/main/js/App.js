import Component from 'metal-jsx';
import Router from 'metal-router';
import {Provider} from 'metal-redux';
import moment from 'moment';

import bundle from 'shared/components/Bundle';
import configureStore from 'shared/store/configure-store';
import ModalRenderer from 'shared/components/ModalRenderer';
import OverlayRenderer from 'shared/components/OverlayRenderer';
import Tooltip from 'shared/components/Tooltip';
import {ACCOUNTS, SEGMENTS, INDIVIDUALS} from 'shared/util/router';
import Constants from 'shared/util/constants';

moment.locale(Constants.locale);

const Home = bundle(() => import('./home/pages/Home'));
const FormsPage = bundle(() => import('./analytics/pages/FormsPage'));
const WorkflowPage = bundle(() => import('./analytics/pages/WorkflowPage'));
const UIKit = bundle(() => import('./ui-kit/pages/index'));

export default class App extends Component {
	created() {
		this._store = configureStore();
	}

	attached() {
		const router = Router.router();

		router.dispatch();
	}

	render() {
		return (
			<Provider store={this._store}>
				<Tooltip />

				<OverlayRenderer />

				<ModalRenderer />

				<Router component={FormsPage} path="/web/analytics/forms" />

				<Router
					component={WorkflowPage}
					path="/web/analytics/workflow"
				/>

				<Router component={Home} path="/web/analytics" />

				{process.env.NODE_ENV === 'development' && (
					<Router component={UIKit} path="/ui-kit" />
				)}

				{process.env.NODE_ENV === 'development' && (
					<Router component={UIKit} path="/ui-kit/:componentName" />
				)}
			</Provider>
		);
	}
}