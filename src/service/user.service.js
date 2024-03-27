import { usersManager } from "../DAL/daos/MongoDB/usersManagerDB.js";
import { hashData } from "../utils/utils.js";

export const findById = (id) => {
    const user = usersManager.findById(id);
    return user;
};

export const findByEmail = (id) => {
    const user = usersManager.findByEmail(id);
    return user;
};

export const updateUser = async (id, obj) => {
    try {
        const userModific = await usersManager.updateOne({ _id: id }, obj);
        return userModific;
    } catch (error) {
        throw new Error(`Error updating user: ${error.message}`);
    }
};

export const createOne = (obj) => {
    const hashedPassword = hashData(obj.password);
    const newObj = { ...obj, password: hashedPassword };
    const createdUser = usersManager.createOne(newObj);
    return createdUser;
};

