import { homeController } from "./controllers/home.js";
import { errorController } from "./controllers/error.js";
import { staticController } from "./controllers/static.js";
import { itemsController, addItemsController } from "./controllers/items.js";
import { addSessionController, loginFormController } from "./controllers/sessions.js";
import { addUserController, registrationFormController } from "./controllers/users.js";

export default function server(request) {
  const url = new URL(request.url);
  console.log(`\n${request.method} ${url.pathname}${url.search}`);
  console.log(`\n${url.searchParams.get("new-item")}`);

  if(url.pathname.startsWith("/assets")) {
    return staticController({ request });
  }

  if(url.pathname == "/") {
    return homeController({ request });
  }

  if(url.pathname == "/items" && request.method == 'POST') {
    return addItemsController({ request });
  }

  if(url.pathname == "/items" && request.method == 'GET') {
    return itemsController({ request });
  }

  if(url.pathname == "/login" && request.method == 'GET') {
    return loginFormController({ request });
  }

  if(url.pathname == "/register" && request.method == 'GET') {
    return registrationFormController({ request });
  }

  if(url.pathname == "/login" && request.method == 'POST') {
    return addSessionController({ request });
  }

  if(url.pathname == "/register" && request.method == 'POST') {
    return addUserController({ request });
  }


  return errorController({ request });
}