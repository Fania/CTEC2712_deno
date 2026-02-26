import redirect from "../redirect.js";
import render from "../render.js";
import { userSchema } from "../schema/user.js";
import { registrationFormView } from "../views/auth.js";
import { validateSchema } from "../validations.js";

export function registrationFormController({ request }) {
    return render(registrationFormView, {}, request);
}

export async function addUserController({ request }) {
    const formData = await request.formData();
    const { isValid, errors } = validateSchema(formData, userSchema);
    if(!isValid) {
        return render(registrationFormView, { errors }, request, 400);
    }
    const username = formData.get("username");
    // const password = formData.get("password");
    // const confirm = formData.get("confirm");
    const validUser = true;
    // validate data
    // create user record here
    const headers = new Headers();
    if(validUser) {
        return redirect(headers, "/", `user ${username} created`);
    }
    
}