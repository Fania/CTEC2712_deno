import render from "../render.js";
import { loginFormView, registrationFormView } from "../views/auth.js";

export function loginFormController({ request }) {
    return render(loginFormView, {}, request);
}

export function registrationFormController({ request }) {
    return render(registrationFormView, {}, request);
}

export function addSessionController({ request }) {
    // return render(registrationFormView, {}, request);
}
