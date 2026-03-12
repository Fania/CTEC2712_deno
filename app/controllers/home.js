import { homeView } from "../views/home.js";
import render from "../render.js";
import { currentSession } from "../auth.js";

export function homeController({ request }) {
  const session = currentSession(request.headers);
  console.log('session',session);
  return render(homeView, {session}, request);
}