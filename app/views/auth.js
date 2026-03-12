import { fragments } from './errors.js';

export function loginFormView({ errors = { username: {}, password: {} }}) {
    const { username, password } = fragments(errors);
    return `
        <section aria-labelledby="login-heading" class="center">
            <h2 id="login-heading">Sign in to your account</h2>
            <p>Don't have an account? <a href="/register">Register here!</a></p>
            <form method="POST" class="auth">
                <label for="username">Username: </label>
                <input id="username" name="username" ${username.value} required>
                ${username.message}
                <label for="password">Password: </label>
                <input id="password" name="password" type="password" ${password.value} required>
                ${password.message}
                <button>Sign in</button>
            </form>
        </section>
    `;
}

export function registrationFormView({ errors = { username: {}, password: {}, confirm: {} }}) {
    const { username, password, confirm } = fragments(errors);
    return `
        <section aria-labelledby="register-heading" class="center">
            <h2 id="register-heading">Create an account</h2>
            <p>Already have an account? <a href="/login">Login here!</a></p>
            <form method="POST" class="auth">
                <label for="username">Username: </label>
                <input id="username" name="username" ${username.value} required>
                ${username.message}
                <label for="password">Password: </label>
                <input id="password" name="password" type="password" ${password.value} required>
                ${password.message}                
                <label for="confirm">Confirm password: </label>
                <input id="confirm" name="confirm" type="password" ${confirm.value} required>
                ${confirm.message}  
                <button>Sign up</button>
            </form>
        </section>
    `;
}