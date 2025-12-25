const MarqueeText = () => {
  const text = "PRECISION • INNOVATION • QUALITY • TRUST • ";
  
  return (
    <section className="py-8 bg-accent overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-accent-foreground text-2xl md:text-4xl font-bold tracking-widest mx-4"
            >
              {text}
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex absolute top-0" style={{ left: "100%" }}>
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-accent-foreground text-2xl md:text-4xl font-bold tracking-widest mx-4"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeText;
