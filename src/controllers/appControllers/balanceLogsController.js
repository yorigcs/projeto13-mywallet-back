import mongoDB from "../../database/mongoDB.js";
const balanceLogsController = async (req, res, next) => {
    const { user } = req.params;
    try {
        const balanceLogs = await mongoDB
            .collection('registerLogs')
            .find({ user }).toArray();
        res.send(balanceLogs);
    } catch (err) {
        console.log(err)
        res.status(500).send("Houve um problema para carregar os dados!");
    }
}

export default balanceLogsController;