import Image from "next/image";
import Navbar from "../layout/Navbar";

export default function HeroSection() {
  return (
    <>
     <Navbar />
      <section className="relative w-full h-[70vh] max-h-[764px] overflow-hidden mt-20">
     

  {/* Background Image */}
  <Image
    src="/images/herosection.jpg"
    alt="Couples Mentoring"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center h-full">
    
    {/* Max width container */}
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-2">
<h1
  style={{ fontFamily: "var(--font-roboto-condensed)" }}
  className="text-white font-bold uppercase
  mt-20 lg:mt-32
  ml-2 lg:ml-0
  text-4xl sm:text-5xl md:text-7xl lg:text-[120px]
  leading-tight lg:leading-[110px]"
>
  COUPLES <br className="hidden sm:block" />
  MENTORING
</h1>
     <p
  style={{ fontFamily: "var(--font-roboto)" }}
  className="text-gray-200 mt-4 max-w-xl
  text-base sm:text-lg md:text-[20px]
  leading-7 md:leading-[32px]
  tracking-[0.01em]"
>
  Find balance in your faith, marriage, and ministry
</p>
<button
  className="mt-6 w-[199px] h-[52px]
  bg-[#1DB575] hover:bg-[#169a63] text-white
  px-[10px] py-[16px]
  rounded-[4px]
  flex items-center justify-center gap-[24px]
  font-medium transition"
>
  Begin Your Journey
  <span className="text-xl">›</span>
</button>

    </div>

  </div>
</section>
    </>
    
   
  );
}