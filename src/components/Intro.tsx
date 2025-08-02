// src/components/Intro.tsx

export default function Intro() {
  return (
    <section
      id="intro"
      className="min-h-[600px] flex flex-col justify-center items-start gap-6 px-6 max-w-3xl mx-auto"
    >
      <h1 className="text-[80px] md:text-6xl font-bold text-foreground">
        Benson Lin
      </h1>

      <h2 className="text-2xl text-accent font-semibold tracking-wide">
        Full-Stack Developer
      </h2>

      <p className="text-muted text-lg max-w-xl leading-relaxed tracking-wide">
        I craft elegant, efficient web applications with a focus on user
        experience and performance.
      </p>
    </section>
  );
}
