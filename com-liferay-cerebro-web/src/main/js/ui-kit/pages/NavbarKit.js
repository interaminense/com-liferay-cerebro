import Component from 'metal-jsx';

import Nav from 'shared/components/Nav';
import NavBar from 'shared/components/NavBar';
import SearchInput from 'shared/components/SearchInput';

import Row from '../components/Row';

class NavBarKit extends Component {
	render() {
		return (
			<div>
				<Row>
					<NavBar>
						<NavBar.Brand>{'Brand'}</NavBar.Brand>
					</NavBar>
				</Row>

				<Row>
					<NavBar display="light">
						<NavBar.Brand>{'display: light'}</NavBar.Brand>
					</NavBar>
				</Row>

				<Row>
					<NavBar display="dark">
						<NavBar.Brand>{'display: dark'}</NavBar.Brand>
					</NavBar>
				</Row>

				<Row>
					<NavBar display="dark">
						<NavBar.Brand>{'Nav:'}</NavBar.Brand>

						<Nav>
							<Nav.Item active href="#" key="Home">
								{'Home'}
							</Nav.Item>

							<Nav.Item active={false} href="#" key="Secondary">
								{'Secondary'}
							</Nav.Item>

							<Nav.Item active={false} href="#" key="Child">
								{'Child'}
							</Nav.Item>
						</Nav>
					</NavBar>
				</Row>

				<Row>
					<NavBar>
						<NavBar.Brand>{'Search:'}</NavBar.Brand>

						<SearchInput />
					</NavBar>
				</Row>
			</div>
		);
	}
}

export default NavBarKit;