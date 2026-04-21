import { Link } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";


const glitchKeyframes = `
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

@keyframes glitch1 {
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
  20% { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
  40% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(3px, 0); }
  80% { clip-path: inset(10% 0 70% 0); transform: translate(-3px, 0); }
}
@keyframes glitch2 {
  0%, 100% { clip-path: inset(80% 0 5% 0); transform: translate(4px, 0); }
  20% { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 0); }
  40% { clip-path: inset(0 0 95% 0); transform: translate(2px, 0); }
  60% { clip-path: inset(30% 0 50% 0); transform: translate(-3px, 0); }
  80% { clip-path: inset(60% 0 20% 0); transform: translate(4px, 0); }
}
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
@keyframes flicker {
  0%, 97%, 100% { opacity: 1; }
  98% { opacity: 0.4; }
  99% { opacity: 0.9; }
}
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50% { transform: translateY(-12px) rotate(1deg); }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes noise {
  0%, 100% { background-position: 0 0; }
  10% { background-position: -5% -5%; }
  20% { background-position: -10% 5%; }
  30% { background-position: 5% -10%; }
  40% { background-position: -5% 15%; }
  50% { background-position: -10% 5%; }
  60% { background-position: 15% 0; }
  70% { background-position: 0 10%; }
  80% { background-position: -15% 0; }
  90% { background-position: 10% 5%; }
}

.font-mono-custom { font-family: 'Space Mono', monospace; }
.font-display { font-family: 'Syne', sans-serif; }

.glitch-container { position: relative; }
.glitch-container::before,
.glitch-container::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}
.glitch-container::before {
  color: #ff2d78;
  animation: glitch1 2.5s infinite linear;
}
.glitch-container::after {
  color: #00f0ff;
  animation: glitch2 2.5s infinite linear;
}

.scanline {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: rgba(0, 240, 255, 0.08);
  animation: scanline 6s linear infinite;
  pointer-events: none;
  z-index: 50;
}

.noise-overlay {
  position: fixed;
  inset: 0;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  animation: noise 0.5s steps(2) infinite;
  pointer-events: none;
  z-index: 40;
}

.flicker { animation: flicker 8s infinite; }
.float-anim { animation: float 4s ease-in-out infinite; }
.fade-up { animation: fadeSlideUp 0.7s ease forwards; }
.blink-cursor { animation: blink 1s step-end infinite; }

.btn-glitch {
  position: relative;
  overflow: hidden;
  transition: all 0.2s;
}
.btn-glitch::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 240, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s;
}
.btn-glitch:hover::before { transform: translateX(0); }
.btn-glitch:hover { box-shadow: 0 0 20px rgba(0, 240, 255, 0.4), inset 0 0 20px rgba(0, 240, 255, 0.05); }

.grid-bg {
  background-image:
    linear-gradient(rgba(0, 240, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 240, 255, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}
`;

export default function NotFound() {
const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "PAGE_NOT_FOUND";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{glitchKeyframes}</style>

      {/* Background layers */}
      <div className="fixed inset-0 bg-[#080b14] grid-bg" />
      <div className="fixed inset-0 bg-gradient-radial"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,30,60,0.6) 0%, transparent 70%)" }} />
      <div className="noise-overlay" />
      <div className="scanline" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 flicker font-mono-custom">

        {/* Top status bar */}
        <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 border-b border-cyan-500/10">
          <span className="text-cyan-500/40 text-xs tracking-widest">SYS://ERR</span>
          <span className="text-cyan-500/40 text-xs tracking-widest">0xDEAD · 404</span>
          <span className="text-cyan-500/40 text-xs tracking-widest">◉ OFFLINE</span>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center gap-8 text-center max-w-2xl w-full">

          {/* Giant 404 */}
          <div className="float-anim select-none" style={{ animationDelay: "0s" }}>
            <div
              className="glitch-container font-display font-extrabold leading-none"
              data-text="404"
              style={{
                fontSize: "clamp(8rem, 22vw, 18rem)",
                color: "#e8f4ff",
                textShadow: "0 0 60px rgba(0,240,255,0.2), 0 0 120px rgba(0,240,255,0.08)",
                letterSpacing: "-0.02em",
              }}
            >
              404
            </div>
          </div>

          {/* Typed error text */}
          <div className="fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="text-cyan-400 text-sm tracking-[0.3em] mb-1">
              {typed}
              <span className="blink-cursor text-cyan-300">█</span>
            </div>
          </div>

          {/* Divider */}
          <div className="fade-up w-full flex items-center gap-4" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <span className="text-cyan-500/30 text-xs">✕</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </div>

          {/* Description */}
          <div className="fade-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Halaman yang kamu cari telah{" "}
              <span className="text-pink-400 line-through">dihapus</span>,{" "}
              dipindahkan, atau mungkin tidak pernah ada.
              <br />
              <span className="text-slate-500 text-xs mt-2 block">
                [ERR_HTTP_RESPONSE_CODE_FAILURE: 404 · resource unavailable]
              </span>
            </p>
          </div>

          {/* Terminal block */}
          <div
            className="fade-up w-full rounded-lg border border-cyan-500/15 bg-black/30 backdrop-blur p-4 text-left text-xs"
            style={{ animationDelay: "0.65s", opacity: 0 }}
          >
            <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="text-slate-600 ml-2 tracking-widest text-[10px]">terminal</span>
            </div>
            <div className="space-y-1 text-slate-500">
              <div><span className="text-cyan-600">$</span> <span className="text-slate-400">fetch /requested-page</span></div>
              <div className="text-red-400/70">→ Error: 404 Not Found</div>
              <div><span className="text-cyan-600">$</span> <span className="text-slate-400">diagnose --verbose</span></div>
              <div className="text-yellow-400/60">→ Route tidak terdaftar dalam sistem.</div>
              <div className="text-yellow-400/60">→ Periksa URL atau kembali ke beranda.</div>
              <div><span className="text-cyan-600">$</span> <span className="blink-cursor text-cyan-400/60">_</span></div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="fade-up flex flex-col sm:flex-row items-center gap-3 w-full" style={{ animationDelay: "0.8s", opacity: 0 }}>
            <button
              className="btn-glitch flex-1 w-full sm:w-auto px-8 py-3.5 rounded border border-cyan-400/40 text-cyan-300 text-sm tracking-widest uppercase hover:text-white transition-all duration-200"
              onClick={() => window.history.back()}
            >
              ← Kembali
            </button>
            <button
              className="btn-glitch flex-1 w-full sm:w-auto px-8 py-3.5 rounded bg-cyan-500/10 border border-cyan-400/50 text-cyan-200 text-sm tracking-widest uppercase hover:bg-cyan-500/20 transition-all duration-200"
              onClick={() => window.location.href = "/"}
            >
              ⌂ Beranda
            </button>
          </div>

          {/* Error code */}
          <div className="fade-up text-slate-700 text-[10px] tracking-widest" style={{ animationDelay: "1s", opacity: 0 }}>
            ERR · 0x0000404 · HTTP_STATUS_NOT_FOUND · SIGTERM
          </div>
        </div>

        {/* Bottom bar */}
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center px-6 py-3 border-t border-cyan-500/10">
          <span className="text-cyan-500/20 text-[10px] tracking-widest">
            ████████░░░░░░░░ 404 · NOT FOUND
          </span>
        </div>
      </div>
    </>
  );
}
