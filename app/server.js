import { homeController } from "./controllers/home.js";
import { errorController } from "./controllers/error.js";
import { staticController } from "./controllers/static.js";
import { itemsController, addItemsController } from "./controllers/items.js";
import { addSessionController, loginFormController, deleteSessionController } from "./controllers/sessions.js";
import { addUserController, registrationFormController } from "./controllers/users.js";
import ApplicationRouter from "./router.js";
import { withLogs } from "./middleware/logging.js";
import { excludesSession, requiresSession, withSession } from "./middleware/auth.js";
import { withHeaders } from "./middleware/headers.js";
import { validate } from "./middleware/validate.js";
import { newItemSchema } from "./schema/new-items.js";
import { userSchema } from "./schema/user.js";

const app = new ApplicationRouter();

app.use(withLogs);
app.use(withHeaders);
app.use(withSession);

app.get('/assets/*', staticController);
app.get('/', homeController);
app.get('/items', itemsController, requiresSession);
app.post('/items', itemsController, requiresSession, validate(newItemSchema), addItemsController);
app.get('/login', loginFormController, excludesSession);
app.post('/login', loginFormController, excludesSession, validate(userSchema), addSessionController);
app.get('/register', registrationFormController, excludesSession);
app.post('/register', registrationFormController, excludesSession, validate(userSchema), addUserController);
app.post('/logout', deleteSessionController, requiresSession);
app.get('*', errorController);
app.post('*', errorController);

export default function server(request) {
  return app.handle({request});
}