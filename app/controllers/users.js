import render from "../render.js";
import { registrationFormView } from "../views/auth.js";

export function registrationFormController({ request }) {
    return render(registrationFormView, {}, request);
}

export async function addUserController({ request }) {
    const formData = await request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    const confirm = formData.get("confirm");

    // validate data
    // create user record here
    console.log(`new user: ${username}`);
}