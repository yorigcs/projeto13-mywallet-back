
const signInController = async (req, res) => {
    const userData = res.locals.data;
    res.status(200).send(JSON.stringify(userData));

}

export default signInController;