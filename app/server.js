import { homeController } from "./controllers/home.js";
import { errorController } from "./controllers/error.js";
import { staticController } from "./controllers/static.js";
import { itemsController, addItemsController } from "./controllers/items.js";
import { addSessionController, loginFormController, deleteSessionController } from "./controllers/sessions.js";
import { addUserController, registrationFormController } from "./controllers/users.js";
import ApplicationRouter from "./router.js";

const app = new ApplicationRouter();

app.get('/assets/*', staticController);
app.get('/', homeController);
app.get('/items', itemsController);
app.post('/items', addItemsController);
app.get('/login', loginFormController);
app.post('/login', addSessionController);
app.get('/register', registrationFormController);
app.post('/register', addUserController);
app.post('/logout', deleteSessionController);
app.get('*', errorController);
app.post('*', errorController);

export default function server(request) {
  const url = new URL(request.url);
  console.log(`\n${request.method} ${url.pathname}${url.search}`);
  console.log(`\n${url.searchParams.get("new-item")}`);
  return app.handle({request});
}