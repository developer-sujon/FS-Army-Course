//External Lib Import
const { model, Schema } = require("mongoose");

//Internal Lib Import
const {
  category: { categoryEnum, categoriesType },
} = require("../constant/enums");

const categorySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      minLength: 3,
      maxLength: 30,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    type: {
      type: String,
      enum: categoryEnum,
      required: true,
      default: categoriesType.BID,
    },
  },
  { timestamps: true, versionKey: false }
);

const Category = model("Category", categorySchema);

module.exports = Category;
