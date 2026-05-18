import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

  userName: {
    type: String,
    required: true,
  },

  userEmail: {
    type: String,
    required: true,
  },

  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
      image: String,
    },
  ],

  totalPrice: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

const Order = mongoose.model("Order", orderSchema);

export default Order;