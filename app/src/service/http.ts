const ORIGIN = window.origin;
const API_ROOT = "/api/v1";

const POST = async (resource: string, body: any) => {
  return fetch(`${ORIGIN}${API_ROOT}${resource}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export { POST };
