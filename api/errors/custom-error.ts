class ErrorData {
  code: string;
  message: string;
  details: string;

  constructor(code: string, message: string, details: string) {
    this.code = code;
    this.message = message;
    this.details = details;
  }
}

class CustomError extends Error {
  statusCode: number;
  statusText: string;
  statusMessage: string;
  data: ErrorData;

  constructor(
    statusCode: number,
    statusText: string,
    statusMessage: string,
    dataCode: string,
    dataMessage: string,
    dataDetails: string
  ) {
    super(statusMessage);

    this.statusCode = statusCode;
    this.statusText = statusText;
    this.statusMessage = statusMessage;
    this.data = new ErrorData(dataCode, dataMessage, dataDetails);
  }
}

export { CustomError };
