import render from "../render.js";
import redirect from "../redirect.js";
import { loginFormView } from "../views/auth.js";
import { validateSchema } from "../validations.js";
import { userSchema } from "../schema/user.js";
import { checkCredentials } from "../models/users.js";
import { login, logout } from "../auth.js";

export function loginFormController(ctx) {
    return render(loginFormView, {}, ctx);
}

export async function addSessionController(ctx) {
    const {request, headers} = ctx;
    const formData = await request.formData();
    const { isValid, errors, validated} = validateSchema(formData, userSchema);
    console.log('adding session', isValid, errors, validated);
    if(!isValid) {
        return render(loginFormView, {errors}, ctx, 400);
    }
    const validCredentials = await checkCredentials(validated);
    if(!validCredentials) {
        return redirect(headers, "/login", `invalid credentials`);
    }
    login(headers, validated.username);
    return redirect(headers, "/", `logged in as ${validated.username}`);
}

export function deleteSessionController(ctx) {
    const {session, headers} = ctx;
    if(session) logout(headers, session.id);
    return redirect(headers, "/", "logged out");
}