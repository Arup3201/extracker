import { ERRORS } from "./error-codes";
import { CustomError } from "./http-error";

class BadInputError extends CustomError {
  constructor(
    dataMessage: string,
    dataDetails: string
  ) {
    super(
      400,
      "Bad Request",
      "Input format provided is not correct",
      ERRORS.BadInput,
      dataMessage,
      dataDetails
    );
  }
}

export { BadInputError };
