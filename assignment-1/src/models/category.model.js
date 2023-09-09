//External Lib Import
const { model, Schema } = require("mongoose");
const {
  categoryEnum,
  categoriesType,
} = require("../constant/enum/category.enum");

const categorySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
      require: true,
      default: true,
    },
    type: {
      type: String,
      enum: categoryEnum,
      require: true,
      default: categoriesType.BID,
    },
  },
  { timestamps: true, versionKey: false }
);

const Category = model("Category", categorySchema);
export default Category;
