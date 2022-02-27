import { json } from "remix";

export function badRequest<Data = unknown>(
  data: Data,
  init?: Omit<ResponseInit, "status">
) {
  return json<Data>(data, { ...init, status: 400 });
}