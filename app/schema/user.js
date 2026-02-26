import { required, minLength } from "../validations.js";

export const userSchema = {
    "username": [required, minLength(3)],
    "password": [required, minLength(4)],
    "confirm": [required, minLength(4)]
}