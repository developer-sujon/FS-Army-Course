//External Lib Import
const router = require("express").Router();

//Internal Lib Import
const ticketController = require("../controller/ticket.controller");

router
  .route("/")
  .post(ticketController.createTicket)
  .get(ticketController.findTicket);

router
  .route("/:ticketID")
  .get(ticketController.findTicketById)
  .patch(ticketController.updateTicketById)
  .delete(ticketController.deleteTicketById);

router
  .route("/bulk")
  .post(ticketController.createMultiple)
  .patch(ticketController.updatedTicketByUserName)
  .delete(ticketController.deletedTicketByUserName);

router.route("/draw/:winnerCount").get(ticketController.draw);

module.exports = router;
