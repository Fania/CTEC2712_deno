export function loginFormView() {
    return `
        <section aria-labelledby="login-heading" class="center">
            <h2 id="login-heading">Sign in to your account</h2>
            <p>Don't have an account? <a href="/register">Register here!</a></p>
            <form method="POST" class="auth">
                <label for="username">Username: </label>
                <input id="username" name="username">
                <label for="password">Password: </label>
                <input id="password" name="password" type="password">
                <button>Sign in</button>
            </form>
        </section>
    `;
}

export function registrationFormView() {
    return `
        <section aria-labelledby="register-heading" class="center">
            <h2 id="register-heading">Create an account</h2>
            <p>Already have an account? <a href="/login">Login here!</a></p>
            <form method="POST" class="auth">
                <label for="username">Username: </label>
                <input id="username" name="username">
                <label for="password">Password: </label>
                <input id="password" name="password" type="password">
                <label for="confirm">Confirm password: </label>
                <input id="confirm" name="confirm" type="password">
                <button>Sign up</button>
            </form>
        </section>
    `;
}