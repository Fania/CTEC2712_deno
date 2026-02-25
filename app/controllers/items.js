import { createItem, getItems } from "../models/items.js";
import render from "../render.js";
import { itemsView } from "../views/items.js";
import { setFlash } from "../flash.js";

export function itemsController({ request }) {
  const items = getItems();
  // console.log(items);
  return render(itemsView, { items }, request);
}

export async function addItemsController({ request }) {
  const formData = await request.formData();
  const newItem = formData.get("new-item");

  if(!newItem || newItem.length < 5) {
    const error = newItem ? "New item must have a minimum of 5 chars." 
                          : "New item cannot be blank";
    const items = getItems();
    return render(itemsView, { items, error }, request, 400);
  }

  const headers = new Headers();
  headers.set('location', '/items');
  createItem(newItem);
  setFlash(headers, `added ${newItem} to the list`)
  return new Response(null, { headers, status: 303 });
}