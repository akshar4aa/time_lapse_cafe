import { useNavigate } from "react-router-dom";
import cafeBg from "../assets/bg.png";

function HeroSection() {

  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${cafeBg})`,
      }}
    >

      <div className="bg-[#3E2723]/80 p-12 rounded-2xl text-center max-w-2xl shadow-2xl">

        <h1 className="text-6xl font-bold text-[#F5E6D3] mb-6">
          Time Lapse Cafe
        </h1>

        <p className="text-[#F8F4EF] text-xl leading-8">
          Experience the aroma of freshly brewed coffee,
          delicious food, and timeless moments.
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="mt-8 bg-[#D7B899] text-[#3E2723] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#F5E6D3] transition duration-300"
        >
          Explore Menu
        </button>

      </div>

    </div>
  );
}

export default HeroSection;