import { schemaInsertValue } from "../../schema/schema.js";

const validateInsert = (req, res, next) => {
    const { user } = req.params;
    const { value, type, date, description } = req.body;
    console.log(user, type, value)
    const isValidInsert = schemaInsertValue.validate(
        {
            user,
            value,
            type,
            date,
            description
        }
    );
    if (isValidInsert.error) {
        console.log(isValidInsert.error)
        return res.status(422).send("Dados inválidos!")
    }

    res.locals.insertData = { user, value, type, date, description };
    next();
}


export default validateInsert;