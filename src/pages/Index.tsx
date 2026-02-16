import { useRef, useState, useEffect } from "react";
import fatherPortrait from "@/assets/father-portrait.png";

const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 8 + 4,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 1.0;
      audioRef.current.loop = true;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(35, 60%, 95%) 0%, hsl(340, 40%, 93%) 50%, hsl(30, 50%, 94%) 100%)",
      }}
    >
      {/* Heavenly glow from top */}
      <div
        className="heavenly-glow fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, hsl(40, 80%, 85%, 0.6), hsl(40, 60%, 90%, 0.2), transparent 70%)",
        }}
      />

      <Particles />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center px-4 py-12 sm:py-20 max-w-2xl mx-auto">
        {/* Heading */}
        <h1
          className="fade-in-up text-4xl sm:text-5xl md:text-6xl font-bold text-center"
          style={{ color: "hsl(25, 50%, 30%)" }}
        >
          என் பொண்ணு…
        </h1>

        {/* Subtitle */}
        <p
          className="fade-in-up fade-in-up-delay-1 mt-4 text-lg sm:text-xl text-center leading-relaxed"
          style={{ color: "hsl(25, 35%, 40%)" }}
        >
          அப்பா இங்க தான் இருக்கேன் டா… உன்னை பாத்துக்கிட்டு…
        </p>

        {/* Portrait */}
        <div className="fade-in-up fade-in-up-delay-2 mt-10 mb-10">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
            style={{
              boxShadow:
                "0 20px 60px -15px hsl(25, 50%, 40%, 0.3), 0 0 80px hsl(40, 60%, 75%, 0.2)",
            }}
          >
            <img
              src={fatherPortrait}
              alt="அப்பா - Beloved Father"
              className="w-full max-w-md object-cover"
            />
            {/* Warm light overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, hsl(40, 60%, 85%, 0.1) 0%, transparent 40%, hsl(25, 40%, 30%, 0.15) 100%)",
              }}
            />
          </div>
        </div>

        {/* Audio button */}
        <button
          onClick={toggleAudio}
          className="fade-in-up fade-in-up-delay-3 mb-10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, hsl(35, 50%, 55%), hsl(25, 60%, 45%))",
            color: "hsl(35, 60%, 96%)",
            boxShadow: "0 8px 30px hsl(25, 50%, 40%, 0.3)",
          }}
        >
          {isPlaying ? "⏸ நிறுத்து" : "அப்பா குரல் கேள் 💛"}
        </button>
        <audio ref={audioRef} src="/dadvoice.ogg" preload="auto" />

        {/* Emotional message */}
        <div
          className="fade-in-up fade-in-up-delay-3 w-full rounded-2xl p-6 sm:p-10 mb-8"
          style={{
            background: "hsl(35, 50%, 95%, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid hsl(35, 40%, 88%)",
          }}
        >
          <div
            className="text-lg sm:text-xl leading-[2.2] text-center whitespace-pre-line"
            style={{ color: "hsl(25, 35%, 28%)" }}
          >
            {`ஏய் பொண்ணு…
நான் இல்லன்னு நினைச்சு அழாதே டா…
உன் கண்ணீரே எனக்கு வலி டா…

நீ சிரிச்சா தான் அப்பாவுக்கு சந்தோஷம்…
நீ பயப்படுற நேரம் எல்லாம் தைரியமா நில்…
அப்பா உன் மனசுக்குள்ள இருக்கான் டா…

நான் உடம்பா இல்ல…
ஆனா உன் நிழலா உன்னோடதான் நடக்கிறேன்…

நீ சந்தோஷமா வாழ்றதுதான் எனக்கு பெரிய பரிசு…
அப்பா உன்னை ரொம்ப ரொம்ப நேசிக்கிறான் டா…`}
          </div>
        </div>

        {/* Special quote */}
        <div
          className="fade-in-up fade-in-up-delay-4 w-full rounded-2xl p-6 sm:p-8 mb-12 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(340, 35%, 92%, 0.6), hsl(35, 50%, 93%, 0.6))",
            border: "1px solid hsl(340, 30%, 87%)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p
            className="text-xl sm:text-2xl font-semibold leading-[2] italic"
            style={{ color: "hsl(340, 30%, 35%)" }}
          >
            "அப்பா போயிட்டார்னு இல்ல டா…
            <br />
            அப்பா உன் இதயத்துல குடி மாற்றிட்டாரு…"
          </p>
        </div>

        {/* Footer */}
        <footer
          className="fade-in-up fade-in-up-delay-5 text-center text-xl font-semibold pb-10"
          style={{ color: "hsl(25, 45%, 40%)" }}
        >
          என்றும் உன் அப்பா ❤️
        </footer>
      </main>
    </div>
  );
};

export default Index;
