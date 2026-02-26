import render from "../render.js";
import redirect from "../redirect.js";
import { loginFormView } from "../views/auth.js";
import { validateSchema } from "../validations.js";
import { userSchema } from "../schema/user.js";

export function loginFormController({ request }) {
    return render(loginFormView, {}, request);
}

export async function addSessionController({ request }) {
    const formData = await request.formData();
    const validation = validateSchema(formData, userSchema);
    if(!validation.isValid) {
        return render(loginFormView, validation, request, 400);
    }
    const username = formData.get("username");
    const password = formData.get("password");
    const validCredentials = true;
    const headers = new Headers();
    if(validCredentials) {
        return redirect(headers, "/", `logged in as ${username}`);
    }
}
