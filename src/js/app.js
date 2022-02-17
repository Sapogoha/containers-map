export default class ErrorRepository {
  constructor() {
    this.listOfErrors = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [500, 'Server Error'],
      [501, 'Not Implemented'],
      [502, 'Bad Gateway'],
    ]);
  }

  translate(code) {
    return this.listOfErrors.has(code)
      ? this.listOfErrors.get(code)
      : 'Unknown error';
  }
}
