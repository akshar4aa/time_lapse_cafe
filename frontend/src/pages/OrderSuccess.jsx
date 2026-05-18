import Navbar from "../components/Navbar";

function OrderSuccess() {

  return (
    <div className="bg-[#3E2723] min-h-screen flex flex-col">

      <Navbar />

      <div className="flex flex-1 justify-center items-center">

        <div className="bg-[#F8F4EF] p-16 rounded-3xl shadow-2xl text-center max-w-2xl">

          <h1 className="text-6xl mb-6">
            ☕
          </h1>

          <h1 className="text-5xl font-bold text-[#3E2723] mb-6">
            Order Confirmed
          </h1>

          <p className="text-2xl text-gray-700 leading-10">

            Your order has been received successfully.

            <br /><br />

            Thank you for choosing
            <span className="font-bold text-[#6F4E37]">
              {" "}Time Lapse Café
            </span>

          </p>

        </div>

      </div>

    </div>
  );
}

export default OrderSuccess;