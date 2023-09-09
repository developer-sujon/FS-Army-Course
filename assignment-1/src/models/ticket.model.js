//External Lib Import
const { model, Schema } = require("mongoose");

//Internal Lib Import
const { ticketEnum, ticketTypes } = require("../constant/enum/ticket.enum");

const ticketSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    ticketNumber: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    ticketSubject: {
      type: String,
      required: true,
    },
    dateOfCreation: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: ticketEnum,
      require: true,
      default: ticketTypes,
    },
  },
  { timestamps: true, versionKey: false }
);

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;
