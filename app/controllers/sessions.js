import render from "../render.js";
import redirect from "../redirect.js";
import { loginFormView } from "../views/auth.js";
import { validateSchema } from "../validations.js";
import { userSchema } from "../schema/user.js";
import { checkCredentials } from "../models/users.js";
import { currentSession, login, logout } from "../auth.js";

export function loginFormController({ request }) {
    return render(loginFormView, {}, request);
}

export async function addSessionController({ request }) {
    const formData = await request.formData();
    const { isValid, errors, validated} = validateSchema(formData, userSchema);
    console.log('adding session', isValid, errors, validated);
    if(!isValid) {
        return render(loginFormView, {errors}, request, 400);
    }
    const validCredentials = await checkCredentials(validated);
    const headers = new Headers();
    if(!validCredentials) {
        return redirect(headers, "/login", `invalid credentials`);
    }
    login(headers, validated.username);
    return redirect(headers, "/", `logged in as ${validated.username}`);
}

export function deleteSessionController({request}) {
    const session = currentSession(request.headers);
    const headers = new Headers();
    if(session) logout(headers, session.id);
    return redirect(headers, "/", "logged out");
}