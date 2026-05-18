import Navbar from "../components/Navbar";

function Payment() {

  return (
    <div className="min-h-screen bg-[#F8F4EF]">

      <Navbar />

      <div className="p-10 max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-[#3E2723] mb-12 text-center">
          Select Payment Method
        </h1>

        <div className="space-y-6">

          {/* UPI */}

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition cursor-pointer">

            <h2 className="text-2xl font-bold text-[#3E2723]">
              UPI Payment
            </h2>

            <p className="text-gray-500 mt-2">
              Pay using Google Pay, PhonePe, Paytm or any UPI app.
            </p>

          </div>

          {/* CARD */}

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition cursor-pointer">

            <h2 className="text-2xl font-bold text-[#3E2723]">
              Credit / Debit Card
            </h2>

            <p className="text-gray-500 mt-2">
              Secure card payments with Visa, Mastercard & RuPay.
            </p>

          </div>

          {/* NET BANKING */}

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition cursor-pointer">

            <h2 className="text-2xl font-bold text-[#3E2723]">
              Net Banking
            </h2>

            <p className="text-gray-500 mt-2">
              Pay directly using your bank account.
            </p>

          </div>

          {/* CASH ON DELIVERY */}

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition cursor-pointer">

            <h2 className="text-2xl font-bold text-[#3E2723]">
              Cash On Delivery
            </h2>

            <p className="text-gray-500 mt-2">
              Pay after your order is delivered.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Payment;