import render from "../render.js";
import { errorView } from "../views/notFound.js";

export function errorController(ctx) {
  const {request} = ctx;
  return render(errorView, {}, ctx, 404);
}