import type { Request } from "express";
import { API_PATH } from "../constants";

function getAbsoluteLocation(request: Request, resource: string) {
  return request.protocol + "://" + API_PATH + resource;
}

export { getAbsoluteLocation };
