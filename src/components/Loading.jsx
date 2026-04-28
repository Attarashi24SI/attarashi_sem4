// export default function Loading() {
//     return (
//         <div className=" flex flex-col justify-center items-center min-h-screen bg-white">
//             <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//             <p className="text-green-600 text-lg">Loading...</p>
//         </div>
//     );
// }

export default function Loading() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0f9f0 0%, #e8f5e2 50%, #f0f9f0 100%)" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Lato:wght@300;400&display=swap');

        @keyframes leafFall {
          0%   { transform: translateY(-20px) rotate(-15deg); opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(40deg); opacity: 0; }
        }
        @keyframes steam {
          0%   { transform: translateY(0) scaleX(1);   opacity: 0; }
          20%  { opacity: 0.4; }
          80%  { opacity: 0.2; }
          100% { transform: translateY(-55px) scaleX(1.8); opacity: 0; }
        }
        @keyframes drip {
          0%   { transform: translateY(0) scaleY(1);      opacity: 1; }
          70%  { transform: translateY(16px) scaleY(1.5); opacity: 0.8; }
          100% { transform: translateY(26px) scaleY(0.2); opacity: 0; }
        }
        @keyframes glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(74,163,74,0.25); }
          50%      { box-shadow: 0 0 0 18px rgba(74,163,74,0); }
        }
        @keyframes dotBounce {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-6px); }
        }
        @keyframes plateIn {
          0%   { transform: scale(0.7) rotate(-8deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg);   opacity: 1; }
        }
        @keyframes sway {
          0%,100% { transform: rotate(-5deg); }
          50%     { transform: rotate(5deg); }
        }
        @keyframes softFloat {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes fadeSlideDown {
          0%   { opacity: 0; transform: translateY(-14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotPulse {
          0%,100% { transform: scale(1);   opacity: 1; }
          50%      { transform: scale(1.6); opacity: 0.5; }
        }

        .plate-anim  { animation: plateIn 0.9s cubic-bezier(.22,1,.36,1) forwards; }
        .glow-anim   { animation: glow 2.2s ease-in-out infinite; }
        .float-anim  { animation: softFloat 3.2s ease-in-out infinite; }
        .brand-in    { animation: fadeSlideDown 0.8s cubic-bezier(.22,1,.36,1) 0.2s both; }
      `}</style>

      {/* ── Falling leaves ── */}
      {[
        { left:"6%",  size:18, dur:5.5, delay:0,   g:"#4caf50" },
        { left:"18%", size:13, dur:7,   delay:1.2, g:"#81c784" },
        { left:"48%", size:16, dur:6,   delay:0.5, g:"#388e3c" },
        { left:"70%", size:14, dur:8,   delay:2,   g:"#66bb6a" },
        { left:"87%", size:11, dur:6.5, delay:0.8, g:"#43a047" },
        { left:"33%", size:10, dur:7.5, delay:3,   g:"#a5d6a7" },
        { left:"60%", size:15, dur:5,   delay:1.8, g:"#2e7d32" },
      ].map((l, i) => (
        <svg key={i} width={l.size} height={l.size} viewBox="0 0 24 24"
          className="absolute top-0 pointer-events-none"
          style={{ left:l.left, animation:`leafFall ${l.dur}s ease-in ${l.delay}s infinite`, opacity:0 }}>
          <path d="M12 2C7 2 3 7 3 12c0 3 5 9 9 10 4-1 9-7 9-10 0-5-4-10-9-10z"
            fill={l.g} fillOpacity="0.6"/>
          <line x1="12" y1="10" x2="12" y2="22" stroke={l.g} strokeWidth="1" strokeOpacity="0.4"/>
        </svg>
      ))}

      {/* ── Ambient blobs ── */}
      <div className="absolute w-80 h-80 rounded-full opacity-20 -top-16 -left-20"
        style={{ background:"radial-gradient(circle, #66bb6a, transparent 70%)" }}/>
      <div className="absolute w-64 h-64 rounded-full opacity-15 -bottom-12 -right-14"
        style={{ background:"radial-gradient(circle, #2e7d32, transparent 70%)" }}/>
      <div className="absolute w-48 h-48 rounded-full opacity-10 top-1/2 -right-10"
        style={{ background:"radial-gradient(circle, #81c784, transparent 70%)" }}/>

      {/* ── Dot texture ── */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:`radial-gradient(circle, #2e7d32 1px, transparent 1px)`,
          backgroundSize:"28px 28px",
        }}/>

      {/* ── Main group ── */}
      <div className="float-anim flex flex-col items-center gap-6 z-10">

        {/* ── Brand name ── */}
        <div className="brand-in flex flex-col items-center gap-1">
          {/* leaf accent above */}
          <div className="flex gap-1 mb-0.5">
            {["#4caf50","#2e7d32","#81c784"].map((c,i) => (
              <svg key={i} width="10" height="10" viewBox="0 0 24 24"
                style={{ animation:`sway ${1.8+i*0.25}s ease-in-out ${i*0.15}s infinite` }}>
                <path d="M12 2C8 2 5 6 5 10c0 2 3 6 7 8 4-2 7-6 7-8 0-4-3-8-7-8z"
                  fill={c} fillOpacity="0.85"/>
              </svg>
            ))}
          </div>

          {/* Wordmark */}
          <div className="flex items-baseline gap-0.5">
            <span
              className="text-4xl font-bold tracking-tight"
              style={{
                fontFamily:"'Playfair Display', Georgia, serif",
                color:"#1b5e20",
                letterSpacing:"-0.01em",
              }}
            >
              Sedap
            </span>
            {/* The dot — animated pulse */}
            <span
              className="text-4xl font-bold"
              style={{
                fontFamily:"'Playfair Display', Georgia, serif",
                color:"#4caf50",
                animation:"dotPulse 2s ease-in-out infinite",
                display:"inline-block",
              }}
            >
              .
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xs tracking-[0.3em] uppercase"
            style={{ color:"#81c784", fontFamily:"'Lato',sans-serif", fontWeight:300 }}>
            fresh · natural · delicious
          </p>

          {/* Divider */}
          <div className="w-20 h-px mt-1" style={{ background:"linear-gradient(90deg, transparent, #81c784, transparent)" }}/>
        </div>

        {/* ── Plate ── */}
        <div className="relative plate-anim">

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-28 h-4 rounded-full blur-md"
            style={{ background:"#1b5e20", opacity:0.12 }}/>

          <div className="glow-anim w-32 h-32 rounded-full flex items-center justify-center relative"
            style={{
              background:"linear-gradient(145deg, #ffffff, #f1f8f1)",
              boxShadow:"0 8px 32px rgba(30,100,30,0.12), inset 0 2px 8px rgba(255,255,255,0.9)",
              border:"3px solid rgba(129,199,132,0.35)",
            }}>
            <div className="absolute inset-4 rounded-full"
              style={{ border:"1.5px solid rgba(129,199,132,0.25)" }}/>

            <div className="relative flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                {["#388e3c","#2e7d32","#4caf50"].map((c,i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24"
                    style={{ animation:`sway ${1.6+i*0.3}s ease-in-out ${i*0.2}s infinite` }}>
                    <path d="M12 2C8 2 5 6 5 10c0 2 3 6 7 8 4-2 7-6 7-8 0-4-3-8-7-8z"
                      fill={c} fillOpacity="0.9"/>
                    <line x1="12" y1="10" x2="12" y2="18" stroke={c} strokeWidth="1.2"/>
                  </svg>
                ))}
              </div>

              <div className="w-13 h-8 rounded-b-full flex items-end justify-center pb-1.5 relative"
                style={{
                  width:"52px", height:"34px",
                  background:"linear-gradient(180deg, #81c784 0%, #388e3c 100%)",
                  boxShadow:"inset 0 4px 8px rgba(255,255,255,0.2), 0 4px 12px rgba(30,100,30,0.2)",
                }}>
                <div className="absolute -top-1 left-3 w-1.5 h-3 rounded-full"
                  style={{ background:"#1b5e20", animation:"drip 2.2s ease-in 0.5s infinite", opacity:0.7 }}/>
                <div className="absolute -top-0.5 right-3 w-1 h-2.5 rounded-full"
                  style={{ background:"#a5d6a7", animation:"drip 2.8s ease-in 1.3s infinite", opacity:0.8 }}/>
                {[0,1,2].map(i => (
                  <div key={i} className="w-1 h-1 rounded-full mx-0.5"
                    style={{ background:"rgba(255,255,255,0.6)" }}/>
                ))}
              </div>
            </div>
          </div>

          {[-10,0,10].map((x,i) => (
            <div key={i} className="absolute pointer-events-none"
              style={{
                bottom:"88%", left:`calc(50% + ${x}px)`,
                width:"6px", height:"22px", borderRadius:"9999px",
                background:"linear-gradient(to top, rgba(129,199,132,0.5), transparent)",
                animation:`steam 2.2s ease-out ${i*0.45}s infinite`,
                transformOrigin:"bottom center",
              }}/>
          ))}
        </div>

        {/* ── Status text ── */}
        <p className="text-xs uppercase tracking-[0.25em]"
          style={{ color:"#81c784", fontFamily:"'Lato',sans-serif", fontWeight:300 }}>
          menyiapkan halaman…
        </p>

        {/* ── Dots ── */}
        <div className="flex gap-2 items-center">
          {["#a5d6a7","#4caf50","#1b5e20"].map((c,i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full"
              style={{ background:c, animation:`dotBounce 1.1s ease-in-out ${i*0.18}s infinite` }}/>
          ))}
        </div>

        {/* ── Shimmer bar ── */}
        <div className="w-36 h-1 rounded-full overflow-hidden"
          style={{ background:"rgba(129,199,132,0.2)" }}>
          <div className="h-full w-full rounded-full"
            style={{
              background:"linear-gradient(90deg, #c8e6c9 0%, #2e7d32 40%, #66bb6a 60%, #c8e6c9 100%)",
              backgroundSize:"200% 100%",
              animation:"shimmer 2s linear infinite",
            }}/>
        </div>
      </div>

      {/* ── Footer ── */}
      <p className="absolute bottom-7 text-center text-xs tracking-widest uppercase"
        style={{ color:"#a5d6a7", fontFamily:"'Lato',sans-serif", fontWeight:300 }}>
        🌿 farm · fresh · natural 🌿
      </p>
    </div>
  );
}