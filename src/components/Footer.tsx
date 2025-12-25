import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent flex items-center justify-center font-bold text-accent-foreground text-lg">
                HSM
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-foreground block">
                  한성정밀기계
                </span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  Hansung Precision Machinery
                </span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              1985년 설립 이래 대한민국 정밀 기계 산업의 발전을 선도해 온 
              한성정밀기계입니다. 최첨단 기술과 숙련된 장인정신으로 
              고객의 성공을 함께 만들어갑니다.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "YouTube", "Blog"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">바로가기</h4>
            <ul className="space-y-3">
              {[
                { label: "회사소개", href: "#about" },
                { label: "사업영역", href: "#business" },
                { label: "제품소개", href: "#products" },
                { label: "연혁", href: "#history" },
                { label: "문의하기", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors line-animate"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">연락처</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>경기도 화성시 정남면 시청로 123</li>
              <li>Tel: 031-123-4567</li>
              <li>Fax: 031-123-4568</li>
              <li>contact@hsmachinery.co.kr</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 한성정밀기계(주). All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-accent hover:scale-110 transition-transform z-50"
        aria-label="맨 위로 이동"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
