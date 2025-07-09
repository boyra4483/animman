class InitDataError extends Error {
  constructor() {
    super();
    this.name = InitDataError.name;
    this.message = "invalid initData";
  }
}

export default InitDataError;
