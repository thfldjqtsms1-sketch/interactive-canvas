import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Car, Cpu, Plane, Factory, Zap, Cog } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    icon: Car,
    title: "자동차 산업",
    description: "엔진, 변속기, 섀시 부품 등 자동차 핵심 부품 제조",
    stats: "200+ 협력사",
  },
  {
    icon: Cpu,
    title: "반도체 장비",
    description: "웨이퍼 가공 장비 및 검사 시스템용 정밀 부품",
    stats: "나노미터 정밀도",
  },
  {
    icon: Plane,
    title: "항공우주",
    description: "항공기 엔진 및 구조물용 고강도 경량 부품",
    stats: "AS9100 인증",
  },
  {
    icon: Factory,
    title: "산업 자동화",
    description: "스마트 팩토리 구현을 위한 자동화 설비",
    stats: "100+ 프로젝트",
  },
  {
    icon: Zap,
    title: "에너지 산업",
    description: "발전 설비 및 신재생 에너지 장비용 부품",
    stats: "친환경 기술",
  },
  {
    icon: Cog,
    title: "일반 기계",
    description: "산업용 기계 및 장비용 맞춤형 부품 제작",
    stats: "맞춤 제작",
  },
];

const BusinessAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".business-card");
      
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="business"
      className="py-32 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Business Areas
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            사업 영역
          </h2>
          <p className="text-muted-foreground text-lg">
            대한민국 핵심 산업의 발전과 함께 성장해 온 한성정밀기계의 다양한 사업 영역을 소개합니다.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="business-card group relative p-8 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-500 cursor-hover overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                <area.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-foreground font-medium">{area.stats}</span>
                </div>
              </div>

              {/* Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-foreground/5 group-hover:text-accent/10 transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;
