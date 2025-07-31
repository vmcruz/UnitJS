class RequiredType extends Error {
  constructor(message: string, ...params: any[]) {
    super(...params);

    this.name = 'RequiredType';
    this.message = message;
  }
}

export default RequiredType;
