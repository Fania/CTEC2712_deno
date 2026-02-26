export function required(name, value) {
    if (!value) return `${name} is a required field.`;
}

export function minLength(n) {
    return (name, value) => {
        if (value.length < n) return `${name} must be at least ${n} characters long.`;
    }
}

export function validateField(name, value, validators) {
    for (const validator of validators) {
        const error = validator(name, value);
        if(error) return error;
    }
}

export function validateSchema(formData, schema) {
    const entries = Object.entries(schema);
    let isValid = true;
    const errorEntries = entries.map([key, {validators, displayName}]) => {
        const value = formData.get(key);
        const message = validateField(displayName || key, value, validators) || "";
        if(message) isValid = false;
        return [key, { value, message, error: !!message }];
    };
    const errors = Object.fromEntries(errorEntries);
    return { isValid, errors };
}
