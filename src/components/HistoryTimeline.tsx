import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { year: "2024", event: "스마트 팩토리 고도화 사업 완료" },
  { year: "2022", event: "제2공장 증설 및 자동화 라인 구축" },
  { year: "2018", event: "항공우주 부품 AS9100 인증 획득" },
  { year: "2015", event: "반도체 장비 부품 사업 진출" },
  { year: "2010", event: "수출 100만불 탑 수상" },
  { year: "2005", event: "ISO 9001, 14001 인증 획득" },
  { year: "1998", event: "CNC 정밀 가공 사업부 신설" },
  { year: "1985", event: "한성정밀기계 설립" },
];

const HistoryTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line grow animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );

      // Timeline items animation
      const items = itemsRef.current?.querySelectorAll(".timeline-item");
      if (items) {
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="history" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            History
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            40년의 발자취
          </h2>
          <p className="text-muted-foreground text-lg">
            한성정밀기계가 걸어온 길, 그리고 앞으로 나아갈 미래
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full h-full bg-accent origin-top"
            />
          </div>

          {/* Timeline Items */}
          <div ref={itemsRef} className="relative">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`timeline-item flex items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block p-6 rounded-xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-500 group cursor-hover ${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <span className="text-accent text-2xl font-bold block mb-2">
                      {item.year}
                    </span>
                    <p className="text-foreground font-medium">{item.event}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-accent border-4 border-background flex-shrink-0" />

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
