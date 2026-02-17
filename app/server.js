import { homeController } from "./controllers/home.js";
import { errorController } from "./controllers/error.js";
import { staticController } from "./controllers/static.js";
import { itemsController } from "./controllers/items.js";

export default function server(request) {
  const url = new URL(request.url);
  console.log(`\n${request.method} ${url.pathname}${url.search}`);

  if(url.pathname.startsWith("/assets")) {
    return staticController({ request });
  }

  if(url.pathname == "/") {
    return homeController({ request });
  }

  if(url.pathname == "/items") {
    return itemsController({ request });
  }

  return errorController({ request });
}