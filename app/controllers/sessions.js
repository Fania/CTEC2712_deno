import render from "../render.js";
import redirect from "../redirect.js";
import { loginFormView } from "../views/auth.js";
import { checkCredentials } from "../models/users.js";
import { login, logout } from "../auth.js";

export function loginFormController(ctx) {
    const {errors} = ctx;
    return render(loginFormView, {errors}, ctx);
}

export async function addSessionController(ctx, next) {
    const {isValid, validated, headers} = ctx;
    console.log('adding session', isValid, validated);
    if(!isValid) return next(ctx);
    const validCredentials = await checkCredentials(validated);
    if(!validCredentials) {
        console.log(validated.username);
        return redirect(headers, "/login", `invalid credentials`);
    }
    console.log(validated.username);
    login(headers, validated.username);
    return redirect(headers, "/", `logged in as ${validated.username}`);
}

export function deleteSessionController(ctx) {
    const {session, headers} = ctx;
    if(session) logout(headers, session.id);
    return redirect(headers, "/", "logged out");
}