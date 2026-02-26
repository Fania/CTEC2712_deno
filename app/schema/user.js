import { required, minLength } from "../validations.js";

export const userSchema = {
    "username": {validators: [required, minLength(3)]},
    "password": {validators: [required, minLength(4)]},
    "confirm": {validators: [required, minLength(4)]}
}