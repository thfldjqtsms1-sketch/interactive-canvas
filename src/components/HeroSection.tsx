import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { ChevronDown, Play } from "lucide-react";
import heroImage from "@/assets/hero-machine.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on hero image
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade out content on scroll
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden"
      id="hero"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={heroImage}
          alt="정밀 CNC 가공 기계"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Since 1985 · 정밀 기계 전문
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
              <span className="block overflow-hidden">
                <span className="block animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
                  정밀함의
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-gradient-accent animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
                  새로운 기준
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              40년의 기술력으로 완성한 한국 최고의 정밀 가공 솔루션.
              <br />
              귀사의 생산성을 혁신합니다.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
              <Button variant="hero" size="xl">
                <span>제품 둘러보기</span>
              </Button>
              <Button variant="glass" size="xl" className="gap-3">
                <Play className="w-5 h-5" />
                기업 소개 영상
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent counter">40+</div>
                <div className="text-sm text-muted-foreground mt-1">년 업력</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground counter">500+</div>
                <div className="text-sm text-muted-foreground mt-1">거래 기업</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground counter">99.8%</div>
                <div className="text-sm text-muted-foreground mt-1">정밀도</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 scroll-indicator" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
