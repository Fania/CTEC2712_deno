export default function render(content, status=200) {
  const headers = new Headers();
  headers.set("content-type", "text/html");
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
            <a href="/about">About</a>
          </nav>
        </header>
        ${content}
      </body>
    </html>
  `;
  return new Response(doc, { headers, status });
}