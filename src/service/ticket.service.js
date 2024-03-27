import { ticketsManager } from "../DAL/daos/MongoDB/ticketManagerDB.js";





export const findById = (id) => {
    const ticket = ticketsManager.findById(id);
    return ticket;
};

export const findByEmail = (id) => {
    const ticket = ticketsManager.findByEmail(id);
    return ticket;
};

export const createOneT = (obj) => {
    const createdTicket = ticketsManager.createOne(obj);
    return createdTicket;
};