import { required, minLength } from "../validations.js";

export const newItemSchema = {
    "new-item": [required, minLength(3)]
}