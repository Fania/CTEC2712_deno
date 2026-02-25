import { escape } from "@std/html/entities";

export function itemsView({ items, error }) {

  const listItems = items.map(item => `<li>${escape(item.label)}</li>`).join("\n");

  const errorMessage = error ? `<p class="error">${escape(error)}</p>` : '';

  return `
    <section aria-label="items section">
      <h2>List of Items</h2>
      <form method="POST" class="new-item">
        <label for="new-item">New Item: </label>
        <input id="new-item" name="new-item" min-length="5" required>
        ${errorMessage}
      </form>
      <ul>
        ${listItems}
      </ul>
    </section>
  `;
}