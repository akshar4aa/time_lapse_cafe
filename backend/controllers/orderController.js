import Order from "../models/Order.js";

export const createOrder = async (req, res) => {

  try {

    const {
      userName,
      userEmail,
      items,
      totalPrice,
    } = req.body;

    const order = await Order.create({
      userName,
      userEmail,
      items,
      totalPrice,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};