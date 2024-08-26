import { http, HttpResponse } from "msw";

import user from "./data/user";

export const handlers = [
  http.get(
    "https://api.github.com/users/eddiejaoude",
    ({ request, params, cookies }) => HttpResponse.json(user)
  ),
];
