import autobind from 'autobind-decorator';
import Component from 'metal-jsx';

import SearchInput from 'shared/components/SearchInput';
import Row from '../components/Row';

class SearchInputKit extends Component {
	@autobind
	handleSubmit(val) {
		alert(val);
	}

	render() {
		return (
			<div>
				<Row>
					<SearchInput onSubmit={this.handleSubmit} />
				</Row>
			</div>
		);
	}
}

export default SearchInputKit;