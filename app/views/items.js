export function itemsView({ items }) {

  const listItems = items.map(item => `<li>${item.label}</li>`).join("\n");

  

  return `
    <section aria-label="items section">
      <h2>List of Items</h2>
      <form method="POST">
        <label for="new-item">New Item: </label>
        <input id="new-item" name="new-item" required>
      </form>
      <ul>
        ${listItems}
      </ul>
    </section>
  `;
}