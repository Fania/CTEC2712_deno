import { db } from "../db.js";

export function getItems() {
  return db.prepare(`SELECT * FROM items`).all();
}

export function createItem(newItem) {
  return db.prepare(`INSERT INTO items (label) VALUES (?)`).run(newItem);
}

