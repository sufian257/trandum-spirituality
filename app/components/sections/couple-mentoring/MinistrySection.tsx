import Image from "next/image";

export default function MinistrySection() {
  return (
   <section className="bg-[#f5f5f5] py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Top Content */}
    <div className="text-center max-w-3xl mx-auto">
      <h2
        style={{ fontFamily: "var(--font-roboto-condensed)" }}
        className="text-center uppercase font-bold
        text-3xl md:text-[60px]
        leading-tight md:leading-[60px]
        tracking-[-0.02em]
        bg-[linear-gradient(90.45deg,#272A2D_59.83%,#1372B7_88.36%)]
        bg-clip-text text-transparent"
      >
        MINISTRY ISN'T <span className="whitespace-nowrap">EASY</span>
        <br />
        ON A MARRIAGE
      </h2>

      <p
        style={{ fontFamily: "var(--font-roboto)" }}
        className="mt-6 text-[#202020] font-normal
        text-base sm:text-lg md:text-[22px]
        leading-7 md:leading-[32px]
        text-center"
      >
        Serving others can cause you to neglect your own relationship. 
        The pressure to lead, perform, and hold it all together often creates 
        emotional distance and burnout. Without space to be honest and supported, 
        your marriage and ministry can suffer. You need to find a way to lead 
        without losing each other.
      </p>
    </div>

    {/* Main Grid */}
    <div className="mt-10 grid md:grid-cols-2 gap-2 lg:gap-2 items-center">

      {/* Image */}
      <div className="relative mx-auto w-full max-w-[466px] h-[420px] md:h-[583px] rounded-[10px] overflow-hidden shadow-lg">
        <Image
          src="/images/couple.jpg"
          alt="Marriage struggles"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:pl-8">

        <h3
          style={{ fontFamily: "var(--font-roboto-condensed)" }}
          className="uppercase font-bold
          text-3xl md:text-[56px]
          leading-tight md:leading-[52px]
          tracking-[-0.02em]
          bg-[linear-gradient(90.45deg,#272A2D_59.83%,#1372B7_88.36%)]
          bg-clip-text text-transparent"
        >
          ARE YOU <br />
          FACING THESE <br />
          <span>CHALLENGES?</span>
        </h3>

        <ul
          style={{ fontFamily: "var(--font-roboto)" }}
          className="mt-6 space-y-3 text-[#434343] font-medium
          text-base md:text-[20px]
          leading-[110%]"
        >
          <li>+ Neglecting Your Marriage</li>
          <li>+ Deep Marital Loneliness</li>
          <li>+ Ministry Burnout</li>
          <li>+ Faith Feels Like Work</li>
          <li>+ Pressure to Be Perfect</li>
          <li>+ No Time for Family</li>
        </ul>

        <button
          className="mt-8 w-[199px] bg-[#1DB575] hover:bg-[#169a63]
          text-white px-[20px] py-[16px]
          rounded-[4px] font-semibold
          flex items-center justify-center gap-[8px]
          transition"
        >
          Begin Your Journey
          <span className="text-xl">›</span>
        </button>

      </div>

    </div>
  </div>
</section>
  );
}