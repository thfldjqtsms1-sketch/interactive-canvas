import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import precisionParts from "@/assets/precision-parts.jpg";
import robotWelding from "@/assets/robot-welding.jpg";
import controlPanel from "@/assets/control-panel.jpg";
import gearMechanism from "@/assets/gear-mechanism.jpg";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: "정밀 가공 부품",
    subtitle: "Precision Components",
    description: "마이크론 단위의 정밀도로 제작되는 핵심 부품",
    image: precisionParts,
  },
  {
    id: 2,
    title: "자동화 시스템",
    subtitle: "Automation Systems",
    description: "스마트 팩토리를 위한 완전 자동화 솔루션",
    image: robotWelding,
  },
  {
    id: 3,
    title: "제어 시스템",
    subtitle: "Control Systems",
    description: "첨단 IoT 기반 실시간 모니터링 시스템",
    image: controlPanel,
  },
  {
    id: 4,
    title: "기어 & 구동부",
    subtitle: "Gears & Drives",
    description: "고정밀 기어박스 및 동력전달 장치",
    image: gearMechanism,
  },
];

const ProductsGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontal = horizontalRef.current;
      const container = containerRef.current;

      if (!horizontal || !container) return;

      const scrollWidth = horizontal.scrollWidth - window.innerWidth;

      // Horizontal scroll animation (pin scroll)
      gsap.to(horizontal, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Individual card animations
      const cards = horizontal.querySelectorAll(".product-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0.5, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: gsap.to(horizontal, { x: -scrollWidth }),
              start: "left 80%",
              end: "left 50%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="relative">
      {/* Header */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
              Products
            </span>
            <h2 className="text-4xl md:text-6xl font-bold">
              제품 라인업
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            40년 기술력의 결정체, 다양한 산업 분야에 적용되는 정밀 기계 솔루션을 만나보세요.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={containerRef} className="h-screen">
        <div
          ref={horizontalRef}
          className="flex gap-8 h-full items-center pl-6 pr-[50vw]"
          style={{ width: "max-content" }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card relative w-[80vw] md:w-[50vw] lg:w-[40vw] h-[70vh] flex-shrink-0 group cursor-hover"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl image-zoom">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-accent text-sm tracking-widest uppercase mb-2 block">
                    {product.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-gradient-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm">
                    {product.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors line-animate py-1"
                  >
                    자세히 보기
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Number */}
                <div className="absolute top-8 right-8 text-8xl font-bold text-foreground/10">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGallery;
