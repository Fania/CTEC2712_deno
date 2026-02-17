import { serveDir } from "@std/http";
import render from "../render.js";

export function staticController({ request }) {
  return serveDir(request);
}