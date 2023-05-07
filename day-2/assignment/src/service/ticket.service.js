const Ticket = require("../models/ticket.model");

class TicketService {
  constructor() {
    this.tickets = [];
  }

  /**
   * @description crate a ticket
   * @param {string} userName
   * @param {number} price
   * @returns {Ticket}
   */
  create(userName, price) {
    console.log(userName, price);

    const ticket = new Ticket(userName, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * @description crate multiple tickets
   * @param {string} userName
   * @param {number} price
   * @param {number} quantity
   * @returns {Ticket[]}
   */
  crateMultiple(userName, price, quantity) {
    const tickets = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = new Ticket(userName, price);
      tickets.push(ticket);
    }
    return tickets;
  }

  /**
   * @description find tickets
   * @returns {Ticket[]}
   */
  find() {
    return this.tickets;
  }

  /**
   * @description find ticket by id
   * @param {string} ticketID
   * @returns {Ticket}
   */
  findById(ticketID) {
    const ticket = this.tickets.find((ticket) => ticket.ticketID === ticketID);
    return ticket;
  }

  /**
   * @description find ticket by userName
   * @param {string} userName
   * @returns {Ticket[]}
   */
  findByUserName(userName) {
    const tickets = this.tickets.filter(
      (ticket) => ticket.userName === userName
    );
    return tickets;
  }

  /**
   * @description update ticket by ticket id
   * @param {string} ticketID
   * @param {{userName:string, price:string}} updateBody
   * @return {Ticket}
   */
  updateTicketById(ticketID, updateBody) {
    // const ticket = this.findById(ticketID);
    // ticket.userName = updateBody.userName ?? ticket.userName;
    // ticket.price = updateBody.price ?? ticket.price;
    // ticket.updatedAt = new Date();
    // return ticket;
  }

  /**
   * @description update ticket by user name
   * @param {string} userName
   * @param {{userName:string, price: number}} updateBody
   * @return {Ticket[]}
   */
  updateTicketByUserName(userName, updateBody) {
    const findTickets = this.findByUserName(userName);
    findTickets.forEach((ticket) => {
      ticket.userName = updateBody.userName;
      ticket.price = updateBody.price;
      ticket.updatedAt = new Date();
    });

    return "findTickets";
  }

  /**
   * @description delete ticket by id
   * @param {string} ticketID
   * @returns {Ticket}
   */
  deleteTicketById(ticketID) {
    const ticketIndex = this.tickets.findIndex(
      (ticket) => ticket.ticketID === ticketID
    );

    if (ticketIndex !== -1) {
      this.tickets.splice(ticketIndex, 1);
      return this.tickets;
    }

    return null;
  }

  /**
   * @description delete tickets by user name
   * @param {string} userName
   * @returns {Ticket[]}
   */
  deleteTicketByUserName(userName) {
    const tickets = this.findByUserName(userName);

    tickets.forEach((ticket) => {
      this.deleteTicketById(ticket.ticketID);
    });

    return tickets;
  }

  /**
   * @description ticket draw
   * @param {number} winnerCount
   * @return {}
   */
  draw(winnerCount) {
    const winnerIndices = new Array(winnerCount);
    let index = 0;

    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      if (!winnerIndices.includes(winnerIndex)) {
        winnerIndices[index++] = winnerIndex;
        continue;
      }
    }

    const winners = winnerIndices.map((index) => this.tickets[index]);

    console.log(winners);

    return winners;
  }
}

module.exports = new TicketService();
