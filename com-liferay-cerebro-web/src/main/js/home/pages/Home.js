import Component from 'metal-jsx';

import BasePage from 'shared/components/BasePage';

class Home extends Component {
	render() {
		return (
			<BasePage topBarTitle={Liferay.Language.get('home')}>
				{'This is Home'}
			</BasePage>
		);
	}
}

export default Home;