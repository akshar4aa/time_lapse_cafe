import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";

function Navbar() {

  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  // LIVE CART COUNT

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // USER

  const user = JSON.parse(localStorage.getItem("user"));

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#3E2723]/95 backdrop-blur-md border-b border-[#5A3A2B] px-12 py-4 flex items-center justify-between shadow-xl">

      {/* LEFT SIDE */}

      <div className="flex items-center gap-10">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-cover rounded-full border-2 border-[#D7B899]"
          />

          <div>

            <h1 className="text-2xl font-bold text-[#F5E6D3] leading-none">
              Time Lapse
            </h1>

            <p className="text-[11px] tracking-[6px] text-[#D7B899] mt-1">
              CAFÉ
            </p>

          </div>

        </div>

        {/* NAV LINKS */}

        <ul className="flex items-center gap-8 text-[17px] font-medium text-[#F5E6D3]">

          <li>

            <Link
              to="/"
              className="hover:text-[#D7B899] transition duration-300"
            >
              Home
            </Link>

          </li>

          <li>

            <Link
              to="/menu"
              className="hover:text-[#D7B899] transition duration-300"
            >
              Menu
            </Link>

          </li>

          {user?.email === "admin@gmail.com" && (

  <li>

    <Link
      to="/admin"
      className="hover:text-[#D7B899] transition duration-300"
    >
      Admin
    </Link>

  </li>

)}

          {/* CART */}

          <li className="relative">

            <Link
              to="/cart"
              className="hover:text-[#D7B899] transition duration-300"
            >
              Cart
            </Link>

            {/* LIVE CART COUNT */}

            {totalItems > 0 && (

              <span className="absolute -top-3 -right-5 bg-[#D7B899] text-[#3E2723] text-xs font-bold w-6 h-6 rounded-full flex justify-center items-center shadow-md">

                {totalItems}

              </span>

            )}

          </li>

        </ul>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex items-center gap-5">

        {user ? (

          <>
            {/* USER INFO */}

            <div className="flex items-center gap-3 bg-[#4B2E24] px-4 py-2 rounded-2xl border border-[#6B4A3A]">

              {/* AVATAR */}

              <div className="w-11 h-11 rounded-full bg-[#D7B899] flex justify-center items-center text-[#3E2723] font-bold text-lg shadow-md">

                {user.name.charAt(0).toUpperCase()}

              </div>

              {/* NAME */}

              <div>

                <h3 className="text-[#F5E6D3] font-semibold leading-none">
                  {user.name}
                </h3>

                <p className="text-[#D7B899] text-xs mt-1">
                  Welcome Back
                </p>

              </div>

            </div>

            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="bg-[#D7B899] text-[#3E2723] px-5 py-2 rounded-xl font-semibold hover:bg-[#F5E6D3] transition duration-300 shadow-md"
            >
              Logout
            </button>

          </>

        ) : (

          <Link
            to="/login"
            className="bg-[#D7B899] text-[#3E2723] px-5 py-2 rounded-xl font-semibold hover:bg-[#F5E6D3] transition duration-300 shadow-md"
          >
            Login
          </Link>

        )}

      </div>

    </nav>
  );
}

export default Navbar;