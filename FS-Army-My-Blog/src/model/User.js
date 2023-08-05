const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "block", "decline"],
      default: "pending",
    },
  },
  { timestamps: true, id: true }
);

const User = model("User", userSchema);

module.exports = User
