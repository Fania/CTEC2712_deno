import { homeView } from "../views/home.js";
import render from "../render.js";

export function homeController(ctx) {
  const { session } = ctx;
  return render(homeView, {session}, ctx);
}