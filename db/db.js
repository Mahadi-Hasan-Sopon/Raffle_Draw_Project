const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * create and save a new ticket
   * @param {String} username
   * @param {Number} price
   * @returns {Ticket} return a Ticket Object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {String} username
   * @param {Number} price
   * @param {Number} quantity
   * @returns {Array<Ticket>}
   */
  bulkcreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * Return All tickets
   */
  find() {
    return this.tickets;
  }

  /**
   * Return Each Ticket
   * @param {String} ticketId
   * @returns {Ticket} ticket
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       * @returns
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }

  /**
   * @param {String} username
   * @returns {Array<Ticket>} Array of Tickets
   */
  findByUsername(username) {
    const ticket = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );
    return ticket;
  }

  /**
   *
   * @param {String} ticketId
   * @param {(username: String, price: Number)} ticketBody
   * @returns {Ticket} updated ticket
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  // Delete Ticket from MyDB
  /**
   *
   * @param {String} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      console.log("Item not Found");
      return false;
    }
  }

  // Raffle Draw
  draw() {}
}

const myDB = new MyDB();
module.exports = myDB;
