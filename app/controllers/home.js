import { homeView } from "../views/home.js";
import render from "../render.js";

export function homeController({ request }) {
  return render(homeView, {}, request);
}