type APIResponse = {
  code: number;
  status: "success" | "fail" | "error";
  message?: string;
  data?: any;
};

export type { APIResponse };
