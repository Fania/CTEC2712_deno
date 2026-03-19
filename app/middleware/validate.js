import { validateSchema } from "../validations.js";

export function validate(schema) {
    return async (ctx, next) => {
        const {request} = ctx;
        const formData = await request.formData();
        const validation = validateSchema(formData, schema);
        if(validation.isValid) {
            console.log('Validated ok');
        } else {
            console.log('Validation errors');
            ctx.status = 400;
        }
        return next({...ctx, ...validation});
    }
}