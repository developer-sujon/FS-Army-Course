//External Lib Import
const { model, Schema } = require("mongoose");

//Internal Lib Import
const {
  invoice: { invoiceEnum, invoiceType },
} = require("../constant/enums");

const invoiceSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryId: {
      type: String,
      ref: "Category",
      required: true,
    },
    invoiceNumber: {
      type: Number,
      required: true,
    },
    dateOfCreation: {
      type: Date,
      required: true,
    },
    dateSent: {
      type: Date,
    },
    dateDue: {
      type: Date,
    },
    tax: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    amountDue: {
      type: Number,
      required: true,
    },
    brief: {
      type: String,
      minLength: 3,
      maxLength: 30,
    },
    status: {
      type: String,
      enum: invoiceEnum,
      default: invoiceType.NEW,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Invoice = model("Invoice", invoiceSchema);

module.exports = Invoice;
