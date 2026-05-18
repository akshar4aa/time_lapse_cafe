import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      // SAVE USER

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      // REDIRECT

      navigate("/");

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (
    <div className="bg-[#3E2723] min-h-screen flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-[#F8F4EF] p-10 rounded-3xl shadow-2xl w-[450px]"
      >

        <h1 className="text-4xl font-bold text-[#3E2723] mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-4 mb-5 rounded-xl border"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-4 mb-3 rounded-xl border"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#6F4E37] text-white py-4 rounded-xl text-lg mt-6"
        >
          Login
        </button>

        <p className="text-center mt-6">

          Don’t have an account?

          <Link
            to="/register"
            className="text-[#6F4E37] font-bold ml-2"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;