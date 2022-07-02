import bcrypt from 'bcrypt';

const encryptedPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}
export { encryptedPassword };