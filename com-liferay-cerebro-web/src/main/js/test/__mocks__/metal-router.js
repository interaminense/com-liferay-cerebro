const router = {
	navigate: jest.fn()
};

export default {
	router: jest.fn().mockReturnValue(router)
};