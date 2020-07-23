import { basePath, apiVersion } from "./config";
import { Result } from "antd";

export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/sing-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((Response) => {
      return Response.json();
    })
    .then((Result) => {
      if (Result.user) {
        return {
          ok: true,
          message: "User Created",
        };
      }
      return {
        ok: false,
        message: Result.message,
      };
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}
