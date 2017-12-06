import Component from 'metal-jsx';

export default class ManagementToolbar extends Component {
	render() {
		return (
			<div class="toolbar toolbar-management toolbar-root">
				{this.props.children}
			</div>
		);
	}
}