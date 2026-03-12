export function homeView({ session }) {
  console.log('homeView session',session);
  const message = session
                  ? `Welcome ${session.username}, this is your homepage.`
                  : `Welcome. Please sign in to personalise your homepage.`;
  return `
    <section aria-labelledby="home-heading">
      <h2 id="home-heading">Welcome Home</h2>
      <p>${message}</p>
    </section>
  `;
}