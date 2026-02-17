export function server(request) {
  console.log(request.url);
  const headers = new Headers();
  headers.set("content-type", "text/html");
  const content = `
   <!Doctype html>
   <html lang="en">
      <head>
        <title>My web application</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1>My Web App</h1>
        <p>Hello World</p>
      </body>
    </html>
  `;
  return new Response(content, { headers });
}