import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import factoryImage from "@/assets/factory-interior.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );

      // Text reveal
      gsap.fromTo(
        textRef.current?.querySelectorAll(".reveal-item") ?? [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { number: "01", title: "최첨단 설비", desc: "독일/일본산 최신 CNC 장비 보유" },
    { number: "02", title: "숙련 인력", desc: "평균 경력 15년 이상 기술진" },
    { number: "03", title: "품질 인증", desc: "ISO 9001, 14001 인증 획득" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <img
              src={factoryImage}
              alt="한성정밀기계 생산시설"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">40</span>
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">년의 역사</div>
                  <div className="text-sm text-muted-foreground">1985년 창립</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={textRef}>
            <span className="reveal-item inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              About Us
            </span>
            
            <h2 className="reveal-item text-4xl md:text-5xl font-bold mb-6 leading-tight">
              기술력과 신뢰로<br />
              <span className="text-gradient-accent">40년을 함께</span>
            </h2>
            
            <p className="reveal-item text-muted-foreground text-lg mb-10 leading-relaxed">
              한성정밀기계는 1985년 설립 이래 대한민국 정밀 기계 산업의 발전을 
              선도해왔습니다. 최첨단 설비와 숙련된 기술진을 바탕으로 
              자동차, 반도체, 항공 산업 등 다양한 분야에 정밀 부품을 공급하고 있습니다.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.number}
                  className="reveal-item flex items-start gap-6 p-4 rounded-lg hover:bg-secondary/50 transition-colors duration-300 group"
                >
                  <span className="text-4xl font-bold text-accent/30 group-hover:text-accent transition-colors">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
