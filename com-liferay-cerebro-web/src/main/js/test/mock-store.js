import {createStore} from 'redux';
import {Map} from 'immutable';
import {Provider} from 'metal-redux';

export default function mockStore(initialState = Map(), reducer = s => s) {
	return createStore(reducer, initialState);
}

export function renderWithStore(Component, props, store = mockStore()) {
	const provider = new Provider({
		children: [<Component key="child" ref="child" {...props} />],
		store
	});

	return provider.refs.child;
}