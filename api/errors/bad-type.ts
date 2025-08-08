import { ERRORS } from "./error-codes";
import { CustomError } from "./custom-error";

class BadTypeError extends CustomError {
  constructor(
    dataMessage: string,
    dataDetails: string
  ) {
    super(
      400,
      "Bad Request",
      "Input type is incorrect",
      ERRORS.BadType,
      dataMessage,
      dataDetails
    );
  }
}

export { BadTypeError };
