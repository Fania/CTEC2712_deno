import { serveDir } from '@std/http';
import render from './render.js';

export default function server(request) {
  const url = new URL(request.url);
  console.log(`\n${request.method} ${url.pathname}${url.search}`);

  if(url.pathname.startsWith("/assets")) {
    return serveDir(request);
  }

  if(url.pathname == "/") {
    return render(`
      <main>
        <h2>Welcome Home</h2>
        <p>Hello World</p>
      </main>
    `);
  }

  return render(`
    <main>
      <h2>Not Found</h2>
      <p>The requested resource does not exist. Sorry!</p>
    </main>
  `, 404);
}