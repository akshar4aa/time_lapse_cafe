import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function Menu() {

  const { addToCart } = useContext(CartContext);

  const pastItems = [
    {
      name: "Filter Coffee",
      price: 60,
      description: "Classic South Indian coffee",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },

    {
      name: "Banana Chips",
      price: 80,
      description: "Old-school crispy snack",
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    },

    {
      name: "Old School Mixture",
      price: 70,
      description: "Traditional spicy mixture",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
    },

    {
      name: "Masala Tea",
      price: 50,
      description: "Hot nostalgic chai",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f",
    },

    {
      name: "Butter Biscuit",
      price: 40,
      description: "Classic bakery biscuit",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    },

    {
      name: "Bread Omelette",
      price: 90,
      description: "Street-style breakfast",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    },

    {
      name: "Veg Puff",
      price: 45,
      description: "Bakery-style puff",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d",
    },

  ];

  const presentItems = [
    {
      name: "Cappuccino",
      price: 120,
      description: "Creamy cappuccino",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },

    {
      name: "Cold Coffee",
      price: 150,
      description: "Chilled creamy coffee",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    },

    {
      name: "White Sauce Pasta",
      price: 240,
      description: "Creamy Italian pasta",
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    },

    {
      name: "Cheese Burger",
      price: 220,
      description: "Loaded cheesy burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },

    {
      name: "French Fries",
      price: 120,
      description: "Crispy fries",
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f",
    },

    {
      name: "Club Sandwich",
      price: 190,
      description: "Toasted sandwich",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    },

    {
      name: "Paneer Pizza",
      price: 300,
      description: "Paneer loaded pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },

    {
      name: "Chocolate Cake",
      price: 180,
      description: "Soft chocolate dessert",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },

    {
      name: "Blue Lagoon",
      price: 180,
      description: "Refreshing mocktail",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
    },
  ];

  const futureItems = [
    {
      name: "Galaxy Lemonade",
      price: 190,
      description: "Color-changing lemonade",
      image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187",
    },

    {
      name: "Nebula Fizz",
      price: 200,
      description: "Cosmic fizzy drink",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    },

    {
      name: "Smoky BBQ Paneer",
      price: 260,
      description: "Smoky grilled paneer",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
    },

    {
      name: "Dragon Smoke Pasta",
      price: 320,
      description: "Smoky futuristic pasta",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
    },

    {
      name: "Nitro Coffee",
      price: 220,
      description: "Cold nitrogen infused coffee",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    },

    {
      name: "Rainbow Mojito",
      price: 210,
      description: "Multi-color mocktail",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
    },

    {
      name: "Future Fries",
      price: 170,
      description: "Loaded futuristic fries",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },

    {
      name: "Meteor Brownie",
      price: 230,
      description: "Hot brownie with smoke effect",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    },
  ];

  const renderItems = (items) => {
    return items.map((item, index) => (
      <div
        key={index}
        className="bg-[#F8F4EF] rounded-2xl shadow-xl p-4"
      >

        <img
          src={item.image}
          alt={item.name}
          className="h-52 w-full object-cover rounded-xl"
        />

        <h2 className="text-2xl font-bold mt-4 text-[#3E2723]">
          {item.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-4">

          <h3 className="text-xl font-bold text-[#6F4E37]">
            ₹{item.price}
          </h3>

          <button
            onClick={() => addToCart(item)}
            className="bg-[#6F4E37] text-white px-4 py-2 rounded-lg hover:bg-[#3E2723]"
          >
            Add
          </button>

        </div>

      </div>
    ));
  };

  return (
    <div className="bg-[#3E2723] min-h-screen">

      <Navbar />

      <div className="pt-36 px-10 pb-10">

        {/* PAST */}

        <h2 className="text-5xl font-bold text-[#D7B899] mb-2">
          Past (Vintage)
        </h2>

        <p className="text-[#F5E6D3] mb-8 text-lg">
          Old-school snacks and nostalgic flavors
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {renderItems(pastItems)}
        </div>

        {/* PRESENT */}

        <h2 className="text-5xl font-bold text-[#D7B899] mb-2">
          Present (Modern)
        </h2>

        <p className="text-[#F5E6D3] mb-8 text-lg">
          Trendy drinks and modern cafe favorites
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {renderItems(presentItems)}
        </div>

        {/* FUTURE */}

        <h2 className="text-5xl font-bold text-[#D7B899] mb-2">
          Future (Futuristic)
        </h2>

        <p className="text-[#F5E6D3] mb-8 text-lg">
          Futuristic smoky presentations and colorful drinks
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {renderItems(futureItems)}
        </div>

      </div>
    </div>
  );
}

export default Menu;