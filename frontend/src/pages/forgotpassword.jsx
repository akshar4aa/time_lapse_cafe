import Navbar from "../components/Navbar";

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">

      <Navbar />

      <div className="flex justify-center items-center mt-20">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">

          <h1 className="text-3xl font-bold text-center text-[#3E2723] mb-6">
            Reset Password
          </h1>

          <p className="text-gray-600 text-center mb-6">
            Enter your email to reset your password
          </p>

          <form className="flex flex-col gap-5">

            <input
              type="email"
              placeholder="Enter Email"
              className="border border-gray-300 p-3 rounded-lg outline-none focus:border-[#6F4E37]"
            />

            <button className="bg-[#6F4E37] text-white py-3 rounded-lg hover:bg-[#3E2723] transition">
              Send Reset Link
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;