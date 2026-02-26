import { createItem, getItems } from "../models/items.js";
import render from "../render.js";
import { itemsView } from "../views/items.js";
import redirect from "../redirect.js";
import { validateField, required, minLength, validateSchema } from "../validations.js";
import { newItemSchema } from "../schema/new-items.js";

export function itemsController({ request }) {
  const items = getItems();
  // console.log(items);
  return render(itemsView, { items }, request);
}

export async function addItemsController({ request }) {
  const formData = await request.formData();

  validateSchema(formData, newItemSchema);

  const newItem = formData.get("new-item");
  const error = validateField("New Item", newItem, [required, minLength(3)]);
  if(error) {
    const items = getItems();
    return render(itemsView, { items, error }, request, 400);
  }

  createItem(newItem);
  const headers = new Headers();
  return redirect(headers, '/items', `added ${newItem} to the list`);
}