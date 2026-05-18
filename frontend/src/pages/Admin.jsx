import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";

function Admin() {

  // FORM DATA

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "Present",
  });

  // MENU ITEMS

  const [menuItems, setMenuItems] = useState([]);

  // FETCH MENU

  const fetchMenu = async () => {

    try {

      const res = await API.get("/menu");

      setMenuItems(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchMenu();

  }, []);

  // HANDLE CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // ADD MENU ITEM

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/menu", formData);

      alert("Menu Item Added");

      fetchMenu();

      setFormData({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "Present",
      });

    } catch (error) {

      console.log(error);

    }
  };

  // DELETE ITEM

  const handleDelete = async (id) => {

    try {

      await API.delete(`/menu/${id}`);

      fetchMenu();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="bg-[#3E2723] min-h-screen">

      <Navbar />

      <div className="pt-36 px-10 pb-20">

        <h1 className="text-5xl font-bold text-[#F5E6D3] mb-10">
          Admin Dashboard
        </h1>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="bg-[#F8F4EF] p-8 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >

          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl border"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="p-4 rounded-xl border"
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="p-4 rounded-xl border"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="p-4 rounded-xl border"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-4 rounded-xl border"
          >

            <option value="Past">
              Past
            </option>

            <option value="Present">
              Present
            </option>

            <option value="Future">
              Future
            </option>

          </select>

          <button
            type="submit"
            className="bg-[#6F4E37] text-white rounded-xl text-lg font-semibold hover:bg-[#3E2723]"
          >
            Add Item
          </button>

        </form>

        {/* MENU ITEMS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {menuItems.map((item) => (

            <div
              key={item._id}
              className="bg-[#F8F4EF] rounded-2xl p-4 shadow-xl"
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
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Admin;