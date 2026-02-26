import redirect from "../redirect.js";
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

    const validUser = true;
    // validate data
    // create user record here
    const headers = new Headers();
    
    if(validUser) {
        // console.log(`new user: ${username}`);
        // setFlash(headers, `user ${username} created`);
        return redirect(headers, '/', `user ${username} created`);
    }
}