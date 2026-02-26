import { required, minLength } from "../validations.js";

export const newItemSchema = {
    "new-item": {
        validators: [required, minLength(3)],
        displayName: "New item"
    }
}