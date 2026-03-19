import render from "../render.js";
import { errorView } from "../views/notFound.js";

export function errorController(ctx) {
  ctx.status = 404;
  return render(errorView, {}, ctx);
}