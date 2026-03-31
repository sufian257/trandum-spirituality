export default function FoundationSection() {
  const features = [
    {
      title: "Compassionate Understanding",
      text: "Speak freely about your struggles in a space where you are fully accepted.",
    },
    {
      title: "Personalized Mentoring",
      text: "Be fully seen and heard by mentors who care deeply about your life.",
    },
    {
      title: "Spiritual Direction",
      text: "Find a clear path forward when you feel spiritually stuck.",
    },
    {
      title: "Decades of Spiritual Wisdom",
      text: "Gain wisdom from mentors whose faith has been tested through decades of hardships and blessings.",
    },
    {
      title: "Biblical Foundation",
      text: "Receive guidance rooted in the unchanging truth of God’s Word.",
    },
    {
      title: "Confidence in Christ",
      text: "Feel empowered to face life's challenges with a renewed spiritual strength.",
    },
  ];

  return (
   <section className="bg-[#f3f3f3] py-16 md:py-20 lg:py-24 px-4 sm:px-6 ">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">

    {/* Left Side */}
    <div>
      <h2 style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
        <span className="block font-condensed font-bold uppercase
        text-3xl sm:text-4xl md:text-5xl lg:text-[60px]
        leading-tight md:leading-[60px] lg:leading-[68px]
        tracking-[-0.02em]
        bg-gradient-to-r from-[#272A2D] to-[#1372B7]
        bg-clip-text text-transparent">
          A FOUNDATION
        </span>

        <span className="block font-condensed font-bold uppercase
        text-3xl sm:text-4xl md:text-5xl lg:text-[60px]
        leading-tight md:leading-[60px] lg:leading-[68px]
        tracking-[-0.02em]
        bg-gradient-to-r from-[#272A2D] to-[#1372B7]
        bg-clip-text text-transparent">
          GROUNDED IN
        </span>

        <span className="block font-condensed font-bold uppercase
        text-3xl sm:text-4xl md:text-5xl lg:text-[60px]
        leading-tight md:leading-[60px] lg:leading-[68px]
        tracking-[-0.02em]
        bg-gradient-to-r from-[#272A2D] to-[#1372B7]
        bg-clip-text text-transparent">
          GOD'S WORD
        </span>
      </h2>

    <p
  style={{
    fontFamily: "Miller Banner, serif",
    fontWeight: 400,
    letterSpacing: "0%",
  }}
  className="mt-6 text-[18px] sm:text-[19px] md:text-[20px] leading-[28px] md:leading-[30px] text-black max-w-lg"
>
  There is hope beyond the struggle you’re facing today. Imagine stepping
  into a new season of life with clarity, strength, and renewed faith.
  These are the ways we support your spiritual journey.
</p>
    </div>

    {/* Right Side */}
    <div className="space-y-6 md:space-y-8">
      {features.map((feature, i) => (
        <div key={i}>
          <h3 style={{ fontFamily: "'Roboto Condensed', sans-serif" }} className="font-condensed font-bold
          text-xl sm:text-2xl md:text-[32px]
          leading-snug md:leading-[30px]
          tracking-[-0.02em] text-[#272A2D]">
            {feature.title}
          </h3>

          <p  style={{
    fontFamily: "Miller Banner, serif",
    fontWeight: 400,
    letterSpacing: "0%",
  }} className="font-miller-display
          text-base sm:text-lg md:text-[18px]
          leading-relaxed md:leading-[24px]
          text-[#272A2D] mt-2">
            {feature.text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}