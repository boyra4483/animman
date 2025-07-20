class InitDataError extends Error {
	constructor(message: string) {
		super();
		this.name = InitDataError.name;
		this.message = message;
	}
}

export default InitDataError;
