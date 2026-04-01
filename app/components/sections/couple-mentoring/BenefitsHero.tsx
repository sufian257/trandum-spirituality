export default function BenefitsSection() {
  return (
   <section className="bg-[#f5f5f5] py-20">
  <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

    {/* Top Label */}
    <span className="inline-block bg-gray-800 text-white text-xs font-semibold px-4 py-2 tracking-wide">
      MAKING A DIFFERENCE
    </span>

    {/* Heading */}
    <h2
      style={{ fontFamily: "var(--font-roboto-condensed)" }}
      className="mt-6 uppercase font-bold
      text-3xl md:text-[60px]
      leading-tight md:leading-[64px]
      tracking-[-0.02em]
      bg-gradient-to-r from-[#272A2D] to-[#1372B7]
      bg-clip-text text-transparent"
    >
      THE BENEFITS OF <br />
      WALKING WITH US
    </h2>

    {/* Benefits Grid */}
    <div className="mt-16 grid md:grid-cols-3 gap-12">

      {/* Column 1 */}
      <div className="md:pr-8 md:border-r border-teal-500/40">
        <h3
          style={{ fontFamily: "var(--font-roboto-condensed)" }}
          className="font-bold text-[#212529]
          text-xl md:text-[32px]
          leading-tight md:leading-[34px]
          tracking-[-0.02em]"
        >
          Biblical Grounding
        </h3>

        <p
         style={{
    fontFamily: "'Miller Text', serif",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "0%",
  }}
          className="mt-4 text-[#212529]
          text-base md:text-[18px]
          leading-6 md:leading-[24px]"
        >
          We are rooted in the unchanging authority of Scripture.
          Every message, conversation, and decision flows from
          a deep trust in God’s Word. We believe the Bible offers
          clear direction for life and ministry.
        </p>
      </div>

      {/* Column 2 */}
      <div className="md:px-8 md:border-r border-teal-500/40">
        <h3
          style={{ fontFamily: "var(--font-roboto-condensed)" }}
          className="font-bold text-[#212529]
          text-xl md:text-[32px]
          leading-tight md:leading-[34px]
          tracking-[-0.02em]"
        >
          Authenticity
        </h3>

        <p
          style={{
    fontFamily: "'Miller Text', serif",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "0%",
  }}
          className="mt-4 text-[#212529]
          text-base md:text-[18px]
          leading-6 md:leading-[24px]"
        >
          Our ministry is grounded in real stories, real struggles,
          and real faith. We believe God works most powerfully
          when people bring their whole selves into the light.
          Authenticity allows for connection, healing, and lasting impact.
        </p>
      </div>

      {/* Column 3 */}
      <div className="md:pl-8">
        <h3
          style={{ fontFamily: "var(--font-roboto-condensed)" }}
          className="font-bold text-[#212529]
          text-xl md:text-[32px]
          leading-tight md:leading-[34px]
          tracking-[-0.02em]"
        >
          Safety
        </h3>

        <p
          style={{
    fontFamily: "'Miller Text', serif",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "0%",
  }}
          className="mt-4 text-[#212529]
          text-base md:text-[18px]
          leading-6 md:leading-[24px]"
        >
          We protect the emotional and spiritual space leaders need
          to grow. Our posture is gentle, our tone is gracious,
          and our presence is steady. We believe growth begins
          where fear ends.
        </p>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-24 max-w-[1000px] mx-auto">

      <h3
        style={{ fontFamily: "var(--font-roboto-condensed)" }}
        className="uppercase font-bold
        text-4xl md:text-[84px]
        leading-[1.05]
        tracking-[-0.02em]
        bg-gradient-to-r from-[#212529] via-[#1372B7] to-[#1DB575]
        bg-clip-text text-transparent"
      >
        <span className="whitespace-nowrap">
          REDISCOVER THE JOY OF
        </span>
        <br />
        MINISTRY TOGETHER
      </h3>

      <p
  style={{ fontFamily: "var(--font-roboto)" }}
  className="mt-6 text-[24px] leading-[28px] font-normal tracking-[0] text-center text-black"
>
  Invest in your marriage today and lead from a place of unity.
</p>

 <button
  className="mt-8 w-[198.84px] bg-[#1DB575] hover:bg-[#169a63]
  text-white px-[20px] py-[16px]
  rounded-[4px]
  flex items-center justify-center gap-[8px]
  mx-auto transition"
>
  Begin Your Journey
  <span>›</span>
</button>

    </div>

  </div>
</section>
  );
}