import render from "../render.js";
import { errorView } from "../views/notFound.js";

export function errorController({ request }) {
  return render(errorView, {}, request, 404);
}