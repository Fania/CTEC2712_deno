import { escape } from "@std/html/entities";
import { getFlash } from "./flash.js";
import { getFlash } from "./flash.js";
import { currentSession } from "./auth.js";

export default function render(viewFn, data, request, status=200) {
  const headers = new Headers();

  const session = currentSession(request.headers);
  const footerMessage = session ?
                        `logged in as '${session.username}'` :
                        '';

  const links = `${session ? 
                  `<a href="/items">items</a>
                  <form method="POST" action="/logout"><button>sign out</button></form>`
                  : `<a href="/login">sign in</a>`
  }`;

  headers.set("content-type", "text/html");

  const flash = getFlash(request.headers, headers);
  const flashMessage = flash ? `
    <aside id="flash">
      <p>${escape(flash)}</p>
    </aside>
  ` : '';
  console.log(flash);

  const content = viewFn(data);
  const doc = `
   <!doctype html>
   <html lang="en">
      <head>
        <title>My web application</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/assets/styles.css">
        <script type="module" url="/assets/js/confirmPassword.js"></script>
      </head>
      <body>
        <header>
          <h1>My Web App</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/items">Items</a>
            <a href="/login">Sign in</a>
          </nav>
        </header>
        <main>
          ${flashMessage}
          ${content}
        </main>
        <footer>
          <p>&copy; Fania</p>
        </footer>
      </body>
    </html>
  `;
  return new Response(doc, { headers, status });
}