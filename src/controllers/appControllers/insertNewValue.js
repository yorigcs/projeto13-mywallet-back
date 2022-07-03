import mongoDB from "../../database/mongoDB.js";
const insertNewValue = async (req, res) => {
    const insertData = res.locals.insertData;
    try {
        await mongoDB
        .collection('registerLogs')
        .insertOne(insertData);
        res.status(201).send("Dados inseridos com sucesso!");
    } catch (err) {
        res.status(500).send("Houve um problema para registrar os dados!");
    }
 
}



export default insertNewValue;