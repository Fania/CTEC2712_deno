import { homeView } from "../views/home.js";
import render from "../render.js";

export function homeController() {
  return render(homeView);
}