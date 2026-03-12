import { createItem, getItems } from "../models/items.js";
import render from "../render.js";
import { itemsView } from "../views/items.js";
import redirect from "../redirect.js";
import { validateSchema } from "../validations.js";
import { newItemSchema } from "../schema/new-items.js";

export function itemsController({ request }) {
  const items = getItems();
  return render(itemsView, { items }, request);
}

export async function addItemsController({ request }) {
  const formData = await request.formData();
  const { isValid, errors } = validateSchema(formData, newItemSchema);
  const newItem = formData.get("new-item");
  const error = errors['new-item'];
  if(!isValid) {
    const items = getItems();
    console.log(error);
    return render(itemsView, { items, errors }, request, 400);
  }
  createItem(newItem);
  const headers = new Headers();
  return redirect(headers, '/items', `added ${newItem} to the list`);
}