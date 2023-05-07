//Internal Lib Import
const ticketService = require("../service/ticket.service");

exports.createTicket = (req, res) => {
  console.log(req.body);
  const { userName, price } = req.body;
  const ticket = ticketService.create(userName, price);
  res.json({
    status: true,
    message: "ticket create successful",
    data: ticket,
  });
};

exports.createMultiple = (req, res) => {
  const { userName, price, quantity } = req.body;
  const tickets = ticketService.crateMultiple(userName, price, quantity);
  res.json({
    status: true,
    message: "ticket create successful",
    data: tickets,
  });
};

exports.findTicket = (req, res) => {
  const tickets = ticketService.find();
  res.json({ status: true, data: tickets });
};

exports.findTicketById = (req, res) => {
  const { ticketID } = req.params;
  const ticket = ticketService.findById(ticketID);
  res.json({ status: true, data: ticket });
};

exports.updateTicketById = (req, res) => {
  const { ticketID } = req.params;
  const updatedTicket = ticketService.updateTicketById(ticketID, req.body);
  res.json({
    status: true,
    message: "ticket update successful",
    data: updatedTicket,
  });
};

exports.updatedTicketByUserName = (req, res) => {
  const { userName } = req.body;
  const updatedTickets = ticketService.updateTicketByUserName(
    userName,
    req.body
  );

  res.json({
    status: true,
    message: "tickets update successful",
    data: updatedTickets,
  });
};

exports.deleteTicketById = (req, res) => {
  const { ticketID } = req.params;
  const deletedTicket = ticketService.deleteTicketById(ticketID);
  res.json({
    status: true,
    message: "ticket delete successful",
    data: deletedTicket,
  });
};

exports.deletedTicketByUserName = (req, res) => {
  const { userName } = req.body;
  console.log(req.body);
  const deletedTickets = ticketService.deleteTicketByUserName(userName);

  res.json({
    status: true,
    message: "tickets delete successful",
    data: deletedTickets,
  });
};

exports.draw = (req, res) => {
  const { winnerCount } = req.params;
  const drawResult = ticketService.draw(winnerCount);

  res.json({
    status: true,
    message: "draw successful",
    data: drawResult,
  });
};
