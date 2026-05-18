import Menu from "../models/Menu.js";


// GET MENU ITEMS

export const getMenuItems = async (req, res) => {

  try {

    const items = await Menu.find();

    res.status(200).json(items);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// ADD MENU ITEM

export const addMenuItem = async (req, res) => {

  try {

    const {
      name,
      price,
      description,
      image,
      category,
    } = req.body;

    const item = await Menu.create({
      name,
      price,
      description,
      image,
      category,
    });

    res.status(201).json(item);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// DELETE MENU ITEM

export const deleteMenuItem = async (req, res) => {

  try {

    await Menu.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Item Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};