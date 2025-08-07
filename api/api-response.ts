import type { APIResponse } from "./api-response.dt";

function getApiResponse(
  code: number,
  status: string,
  data: any = {}, 
  message: string = "",
) {
  return {
    code: code,
    status: status,
    message: message,
    data: data,
  } as APIResponse;
}

export { getApiResponse };
