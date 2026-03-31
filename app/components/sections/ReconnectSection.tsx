import Image from "next/image"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
export default function ReconnectSection() {
  return (
   <section className="bg-[#f3f3f3] py-16 md:py-24 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* Header */}
   <div className="text-center max-w-4xl mx-auto">
  <h2 style={{ fontFamily: "'Roboto Condensed', sans-serif" }}  className="font-condensed font-bold uppercase 
  text-4xl sm:text-5xl md:text-6xl lg:text-[84px] 
  leading-tight lg:leading-[80px] tracking-[-0.02em] 
  bg-[linear-gradient(90.05deg,_#212529_23.57%,_#1372B7_61.76%,_#1DB575_99.95%)] 
  bg-clip-text text-transparent">
    RECONNECT WITH GOD
  </h2>

  <p className="mt-4 font-roboto text-lg md:text-xl lg:text-2xl text-black">
    Fulfill God’s purpose for your life and ministry.
  </p>

  {/* Button */}
  <button
    className="
    mt-8
    flex items-center justify-center gap-2
    bg-[#1DB575] hover:bg-[#169a63]
    text-white
    px-3 py-4
    h-[52px]
    w-full sm:w-[198px]
    mx-auto
    rounded
    font-medium
    transition
    "
  >
    Begin Your Journey →
  </button>
</div>

    {/* Content Grid */}
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-16 lg:mt-20 items-start">

      {/* Podcast Card */}
      <div className="relative w-full aspect-[557/446] rounded-lg overflow-hidden shadow-lg lg:translate-x-10 lg:translate-y-10">
        <Image
          src="/images/podcast.png"
          alt="Podcast"
          fill
          className="object-cover mix-blend-multiply"
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 md:p-10 text-white">
          <h3 style={{ fontFamily: "'Roboto Condensed', sans-serif" }}  className="font-condensed font-bold uppercase 
          text-2xl sm:text-3xl md:text-5xl lg:text-[68px] 
          leading-tight tracking-[-0.02em] text-[#EDEDED]">
            THE STRUGGLING
            <br />
            WELL PODCAST
          </h3>

          <p className="mt-3 text-sm md:text-base text-white/90">
            Hope, healing, and truth for everyday struggles.
          </p>

          <button className="mt-6 w-fit flex items-center gap-2 bg-[#1DB575] px-5 py-3 rounded-md text-sm md:text-base text-white">
  More Episodes <ChevronRight size={16} />
</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8">

        {/* Latest Episode Card */}
   <div className="w-full max-w-[487px] aspect-[487/365] mx-auto lg:mx-0 bg-white border border-gray-200 rounded-[8px] shadow-lg p-6 md:p-8 flex flex-col">
  
  <h4
    style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
    className="font-condensed font-bold text-[20px] md:text-[24px] leading-[30px] tracking-[-0.02em] text-[#083254]"
  >
    Latest Episode
  </h4>

  <div className="border-b mt-3 mb-5"></div>

  <p className="font-proxima-condensed font-bold text-[14px] md:text-[16px] uppercase text-[#1DB575]">
    EPISODE 8 • 46 min
  </p>

  <h3
    style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
    className="font-condensed font-bold text-[18px] md:text-[22px] leading-[30px] underline text-[#083254] mt-2"
  >
    The One Percent: Ryan Bomberger's Powerful Testimony of Adoption
  </h3>

  <p
    style={{
      fontFamily: "Miller Banner, serif",
      fontWeight: 400,
      letterSpacing: "0%",
    }}
    className="font-miller-banner text-[14px] md:text-[16px] leading-[150%] text-[#4A4848] mt-3"
  >
    Cras facilisis orci in arcu ullamcorper viverra. Maecenas
    vulputate risus augue, id suscipit nunc tincidunt sed.
    Quisque auctor scelerisque arcu.
  </p>

  <div className="flex gap-4 mt-auto items-center">
    <Image src="/images/icon1.png" alt="Apple Podcast" width={23} height={24} />
    <Image src="/images/icon2.png" alt="Spotify" width={23} height={24} />
    <Image src="/images/icon3.png" alt="Play" width={23} height={24} />
  </div>

</div>

        {/* Secondary Image */}
        <div className="relative w-full sm:w-[70%] md:w-[60%] lg:w-[311px] aspect-[311/233] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/counseling.png"
            alt="Counseling"
            fill
            className="object-cover"
          />
        </div>

      </div>

    </div>

  </div>
</section>
  )
}