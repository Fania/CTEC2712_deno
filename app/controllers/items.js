import { createItem, getItems } from "../models/items.js";
import render from "../render.js";
import { itemsView } from "../views/items.js";

export function itemsController() {
  const items = getItems();
  // console.log(items);
  return render(itemsView, { items });
}

export async function addItemsController({ request }) {
  const formData = await request.formData();
  const newItem = formData.get("new-item");

  if(!newItem || newItem.length < 5) {
    const error = newItem ? "New item (${newItem}) must have a minimum of 5 chars." 
                          : "New item cannot be blank";
    const items = getItems();
    return render(itemsView, { items, error }, 400);
  }

  createItem(newItem);
  const headers = new Headers();
  headers.set('location', '/items');
  return new Response(null, { headers, status: 303 });
}