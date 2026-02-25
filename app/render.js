import { escape } from "@std/html/entities";
import { getFlash } from "./flash.js";

export default function render(viewFn, data, request, status=200) {
  const headers = new Headers();
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