import render from "../render.js";
import { errorView } from "../views/error.js";

export function errorController() {
  return render(errorView, {}, 404);
}