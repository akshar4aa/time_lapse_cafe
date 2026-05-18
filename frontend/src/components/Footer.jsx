import logo from "../assets/logo.png";

function Footer() {

  return (
    <footer className="bg-[#1E120F] text-[#F5E6D3] mt-28 relative overflow-hidden border-t border-[#4B2E24]">

      {/* PREMIUM BACKGROUND EFFECTS */}

      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#6F4E37] opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#D7B899] opacity-10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 py-24">

        {/* MAIN SECTION */}

        <div className="flex flex-col lg:flex-row justify-between items-start gap-20">

          {/* LEFT PREMIUM BRAND SECTION */}

          <div className="max-w-lg">

            <div className="flex items-center gap-6">

              <img
                src={logo}
                alt="Logo"
                className="w-24 h-24 rounded-full object-cover border-2 border-[#D7B899] shadow-2xl"
              />

              <div>

                <h1 className="text-5xl font-bold text-[#F5E6D3] leading-none">
                  Time Lapse
                </h1>

                <p className="text-sm tracking-[10px] text-[#D7B899] mt-3">
                  CAFÉ
                </p>

              </div>

            </div>

            <p className="text-[#D7B899] mt-10 leading-9 text-[16px]">

              Experience a journey through time with every sip and bite.
              From nostalgic vintage flavors to modern café classics and
              futuristic culinary creations — Time Lapse Café blends memories,
              imagination, and premium café culture into one unforgettable experience.

            </p>

          </div>

          {/* RIGHT SECTION */}

          <div className="flex flex-col md:flex-row gap-24">

            {/* HOURS */}

            <div>

              <h2 className="text-3xl font-semibold mb-10 text-[#F5E6D3]">
                Opening Hours
              </h2>

              <div className="space-y-7 text-[#D7B899] text-[15px] leading-8">

                <div>

                  <p className="font-semibold text-[#F5E6D3]">
                    Monday - Friday
                  </p>

                  <p>
                    9:00 AM — 11:00 PM
                  </p>

                </div>

                <div>

                  <p className="font-semibold text-[#F5E6D3]">
                    Saturday
                  </p>

                  <p>
                    10:00 AM — 12:00 AM
                  </p>

                </div>

                <div>

                  <p className="font-semibold text-[#F5E6D3]">
                    Sunday
                  </p>

                  <p>
                    10:00 AM — 10:00 PM
                  </p>

                </div>

              </div>

            </div>

            {/* CONTACT */}

            <div>

              <h2 className="text-3xl font-semibold mb-10 text-[#F5E6D3]">
                Contact
              </h2>

              <div className="space-y-7 text-[#D7B899] text-[15px]">

                <div>

                  <p className="font-semibold text-[#F5E6D3]">
                    Location
                  </p>

                  <p>
                    Hyderabad, India
                  </p>

                </div>

                <div>

                  <p className="font-semibold text-[#F5E6D3]">
                    Phone
                  </p>

                  <p>
                    +91 9876543210
                  </p>

                </div>

                <div>

                  <p className="font-semibold text-[#F5E6D3]">
                    Email
                  </p>

                  <p>
                    timelapsecafe@gmail.com
                  </p>

                </div>

              </div>

              {/* SOCIALS */}

              <div className="flex gap-5 mt-12">

                <div className="w-14 h-14 rounded-full bg-[#2B1B17] border border-[#5A3A2B] flex justify-center items-center hover:bg-[#D7B899] hover:text-[#1E120F] transition duration-300 cursor-pointer text-2xl shadow-xl">

                  📸

                </div>

                <div className="w-14 h-14 rounded-full bg-[#2B1B17] border border-[#5A3A2B] flex justify-center items-center hover:bg-[#D7B899] hover:text-[#1E120F] transition duration-300 cursor-pointer text-2xl shadow-xl">

                  🎵

                </div>

                <div className="w-14 h-14 rounded-full bg-[#2B1B17] border border-[#5A3A2B] flex justify-center items-center hover:bg-[#D7B899] hover:text-[#1E120F] transition duration-300 cursor-pointer text-2xl shadow-xl">

                  ▶

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* PREMIUM QUOTE */}

        <div className="mt-28 border-t border-[#4B2E24] pt-16 text-center">

          <h2 className="text-5xl font-light italic text-[#F5E6D3] leading-relaxed">

            “Travel through time,
            one sip at a time.”

          </h2>

          <p className="text-[#D7B899] mt-6 tracking-[6px] text-sm">
            TIME LAPSE CAFÉ
          </p>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="border-t border-[#4B2E24] py-7 text-center text-[#D7B899] text-sm relative z-10 tracking-wide">

        © 2026 Time Lapse Café — Premium Café Experience.

      </div>

    </footer>
  );
}

export default Footer;