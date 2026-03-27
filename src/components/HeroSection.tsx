import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="top" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Champ de chanvre au coucher du soleil"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p
          className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Bien-être naturel
        </p>
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-tight max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Retrouvez l'harmonie,
          <br />
          <em className="italic">naturellement</em>
        </h1>
        <p
          className="font-body text-base md:text-lg text-primary-foreground/80 mt-6 max-w-lg mx-auto animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Des produits CBD d'exception, cultivés avec soin pour votre équilibre au quotidien.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <a
            href="#produits"
            className="inline-block mt-10 px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Découvrir la gamme
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
