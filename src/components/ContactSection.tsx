import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    { icon: MapPin, label: "주소", value: "경기도 화성시 정남면 시청로 123" },
    { icon: Phone, label: "전화", value: "031-123-4567" },
    { icon: Mail, label: "이메일", value: "contact@hsmachinery.co.kr" },
    { icon: Clock, label: "영업시간", value: "평일 09:00 - 18:00" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            문의하기
          </h2>
          <p className="text-muted-foreground text-lg">
            견적 문의부터 기술 상담까지, 전문 상담원이 신속하게 답변드립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} className="bg-card rounded-xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-6">견적 문의</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
                    placeholder="귀사명을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    담당자명
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
                    placeholder="성함을 입력하세요"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    연락처
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors text-foreground"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  문의 내용
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:outline-none transition-colors resize-none text-foreground"
                  placeholder="문의하실 내용을 자세히 적어주세요"
                />
              </div>

              <Button variant="accent" size="xl" className="w-full">
                문의 보내기
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div className="bg-card rounded-xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground mb-1">
                        {info.label}
                      </span>
                      <span className="text-foreground font-medium">
                        {info.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary border border-border/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">지도 영역</p>
                  <p className="text-sm text-muted-foreground/60 mt-1">
                    경기도 화성시 정남면
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
