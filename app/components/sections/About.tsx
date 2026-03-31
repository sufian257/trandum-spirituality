"use client";

export default function AboutSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        
        {/* Heading */}
 <h2 style={{ fontFamily: "'Roboto Condensed', sans-serif" }} className="
  !font-heading
  font-bold
  uppercase
  text-center
  text-[28px] md:text-[60px]
  leading-[36px] md:leading-[68px]
  tracking-[-0.02em]
  mb-6
  bg-[linear-gradient(90.45deg,#272A2D_59.83%,#1372B7_88.36%)]
  bg-clip-text text-transparent
">
  EMPOWERING THE <span>CHURCH</span>
  <br />
  THROUGH RENEWED FAITH & <span>HOPE</span>
</h2>
        {/* Paragraph */}
      <p className="
  font-roboto
  font-normal
  text-center
  text-[16px] md:text-[22px]
  leading-[26px] md:leading-[32px]
  tracking-[0em]
  text-[#444]
  mb-10
">
  Welcome to Tandem Spirituality. Our hearts are for the Church, and we
  are passionate about cultivating the spiritual and emotional health of
  its leaders and its people. We offer guidance based on lived experience
  for the unique challenges all of us face in faith and in life. Explore
  our ministry to see how we help you move forward in your spiritual
  journey.
</p>
        {/* Author */}
        <div>
         <p style={{ fontFamily: "'inter', sans-serif" }} className="font-inter font-bold text-[20px] leading-[28px] text-center text-[#000000]">
  Jimmy and Suzi Kallam
</p>
          <p
  style={{
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#000000",
  }}
>
  Co-Founders of Tandem Spirituality
</p>
        </div>

      </div>
    </section>
  );
}