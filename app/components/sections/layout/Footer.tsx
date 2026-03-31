import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
   

<footer className="relative w-full min-h-[544px] text-white pt-20 pb-10 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-[#272A2D]"></div>

  {/* Glow */}
  <div className="absolute bottom-0 right-0 w-[175px] h-[175px] bg-[#2980D6] blur-[250px] rounded-full"></div>

  <div className="relative z-10 max-w-[1366px] mx-auto px-6">

    {/* MAIN CONTENT */}
    <div className="grid md:grid-cols-2 gap-20">

      {/* LEFT SIDE */}
      <div>
        <h3
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
          className="text-[28px] sm:text-[32px] md:text-[40px] leading-[40px] md:leading-[68px] uppercase mb-2"
        >
          Stay Connected
        </h3>

        <p className="text-[#C4C4C4] text-[14px] md:text-[16px] mb-6">
          Get updates on events and inspiration.
        </p>

        <div className="flex items-center gap-4 w-full max-w-[420px]">
          <input
            type="email"
            placeholder="Email*"
            className="w-full h-[52px] px-4 bg-transparent border border-[#959595] rounded-[4px] text-[16px] placeholder:text-[#C4C4C4] outline-none"
          />

          <button className="w-[140px] h-[52px] bg-[#1DB575] hover:bg-[#169a63] rounded-[4px] text-white text-[14px] font-semibold flex items-center justify-center">
            Subscribe →
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">

        {/* MINISTRIES */}
        <div>
          <h4 className="font-bold text-[20px] md:text-[24px] uppercase mb-4"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
            Ministries
          </h4>

          <ul className="space-y-2 text-[#C4C4C4] text-[16px]">
            <li>Couples Mentoring</li>
            <li>Ministry Transitions</li>
            <li>Spiritual health Coaching</li>
            <li>International Ministry</li>
            <li>Church Leadership Coaching</li>
          </ul>
        </div>

        {/* ABOUT + RESOURCES */}
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-[20px] md:text-[24px] uppercase mb-4"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
              About Us
            </h4>
            <ul className="space-y-2 text-[#C4C4C4] text-[16px]">
              <li>About</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[20px] md:text-[24px] uppercase mb-4"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
              Resources
            </h4>
            <ul className="space-y-2 text-[#C4C4C4] text-[16px]">
              <li>Podcast</li>
              <li>Book</li>
              <li>Events</li>
            </ul>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-bold text-[20px] md:text-[24px] uppercase mb-4"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
            Contact
          </h4>

          <p className="space-y-2 text-[#C4C4C4] text-[16px]">
            7845 Colony Road <br />
            Suite C4-236 <br />
            Charlotte, NC 28226
          </p>

         <div className="flex gap-4 mt-4">
  <FaXTwitter className="w-[20px] h-[18px] text-white cursor-pointer hover:text-[#1DB575]" />
  <FaInstagram className="w-[20px] h-[18px] text-white cursor-pointer hover:text-[#1DB575]" />
</div>
        </div>

      </div>
    </div>

    {/* BOTTOM ROW */}
    <div className="mt-16 flex items-center justify-between text-xs text-gray-400">

      {/* LOGO */}
      <img
        src="/images/logo-footer.png"
        alt="Tandem Spirituality"
        className="w-[188px]"
      />

      {/* RIGHT TEXT */}
      <div className="flex items-center gap-3">
        <p className="text-[#F3F4F6]">© Copyright 2012–2025 Not Dead Yet. All Rights Reserved.</p>
        <span className="opacity-70">Made by Digital Alchemy</span>
      </div>

    </div>

  </div>

</footer>
  );
} 
