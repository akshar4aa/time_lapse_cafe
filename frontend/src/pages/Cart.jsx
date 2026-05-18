import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {


    const navigate = useNavigate();
    
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const [orderPlaced, setOrderPlaced] = useState(false);

  // TOTAL PRICE

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    navigate("/success");
  };

  return (
    <div className="bg-[#3E2723] min-h-screen">

      <Navbar />

      <div className="pt-36 px-10 pb-10">

        <h1 className="text-5xl font-bold text-[#F5E6D3] mb-10">
          Your Cart
        </h1>

        {cart.length === 0 ? (

          <h2 className="text-2xl text-[#D7B899]">
            Cart is Empty
          </h2>

        ) : (

          <div className="space-y-6">

            {cart.map((item, index) => (

              <div
                key={index}
                className="bg-[#F8F4EF] p-6 rounded-2xl shadow-lg flex justify-between items-center"
              >

                {/* LEFT */}

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl"
                  />

                  <div>

                    <h2 className="text-2xl font-bold text-[#3E2723]">
                      {item.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {item.description}
                    </p>

                    <h3 className="text-xl font-bold text-[#6F4E37] mt-2">
                      ₹{item.price}
                    </h3>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="flex flex-col items-center gap-4">

                  {/* QUANTITY */}

                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => decreaseQuantity(item.name)}
                      className="bg-[#6F4E37] text-white w-10 h-10 rounded-lg text-xl"
                    >
                      -
                    </button>

                    <h2 className="text-2xl font-bold text-[#3E2723]">
                      {item.quantity}
                    </h2>

                    <button
                      onClick={() => increaseQuantity(item.name)}
                      className="bg-[#6F4E37] text-white w-10 h-10 rounded-lg text-xl"
                    >
                      +
                    </button>

                  </div>

                  {/* REMOVE */}

                  <button
                    onClick={() => removeItem(item.name)}
                    className="bg-red-500 text-white px-5 py-2 rounded-lg"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

            {/* TOTAL */}

            <div className="bg-[#F8F4EF] p-6 rounded-2xl shadow-lg flex justify-between items-center mt-10">

              <h1 className="text-4xl font-bold text-[#3E2723]">
                Total: ₹{totalPrice}
              </h1>

              <button
                onClick={handleOrder}
                className="bg-[#6F4E37] text-white px-8 py-4 rounded-xl text-lg hover:bg-[#3E2723]"
              >
                Order Now
              </button>

            </div>

            {/* ORDER MESSAGE */}

            {orderPlaced && (

              <div className="bg-green-500 text-white text-center py-4 rounded-xl text-2xl font-bold mt-8">

                Your order has been received ✅

              </div>

            )}

          </div>

        )}

      </div>
    </div>
  );
}

export default Cart;