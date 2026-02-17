export function itemsView({ items }) {

  const listItems = items.map(item => `<li>${item.label}</li>`).join("\n");
  return `
    <h2>List of Items</h2>
    <ul>
      ${listItems}
    </ul>
  `;
}