export default function TailwindCSS() {
  return (
    <>
      <FlexboxGrid />
      <div>
        <h1 className="border m-4">Belajar Tailwind CSS 4</h1>
        <button
          className="bg-blue-500 text-white
                            px-4 py-2 mx-4 rounded 
                            shadow-lg "
        >
          Click Me
        </button>

        <Spacing title="Card Title" content="Alamak Takutnya" />
        <Typography />
        <BorderRadius />
        <BackgroundColors />
        <ShadowEffects />
      </div>
    </>
  );
}

function Spacing(props) {
  return (
    <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
      <h2 className="text-lg font-semibold">{props.title}</h2>
      <p className="mt-2 text-gray-600">{props.content}</p>
    </div>
  );
}

function Typography() {
  return (
    <div>
      <h1 className="text-3xl m-4 font-semibold text-blue-600">
        Tailwind Typography
      </h1>
      <p className="text-gray-300 text-lg mt-2 ">
        Belajar Tailwind sangat menyenangkan dan cepat!
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <button className="m-4 border-2 border-blue-300 text-blue-500 px-4 py-2 rounded-lg">
      {" "}
      Klik Saya{" "}
    </button>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg m-4">
      <h3 className="text-xl font-bold">Tailwind Colors</h3>
      <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="flex justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-lg font-bold">MyWebsite</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}




// import React from "react";

// export default function PixelRPGCard() {
//   return (
//     <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-6 font-mono">
      
//       {/* Card */}
//       <div className="w-full max-w-3xl bg-[#16213e] border-4 border-[#e94560] shadow-[6px_6px_0px_#000] p-6">
        
//         {/* Header */}
//         <div className="flex justify-between items-center border-b-4 border-[#e94560] pb-3 mb-4">
//           <h1 className="text-xl text-[#f5f5f5] tracking-widest">
//             HERO DATA
//           </h1>
//           <span className="bg-[#e94560] text-black px-2 py-1 text-sm border-2 border-black shadow-[2px_2px_0px_#000]">
//             LV 27
//           </span>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
//           {/* Avatar */}
//           <div className="flex flex-col items-center text-center gap-2">
//             <div className="w-24 h-24 bg-[#0f3460] border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center text-white">
//               🧙
//             </div>
//             <h2 className="text-[#f5f5f5] text-sm">ARKAN</h2>
//             <p className="text-[#a8a8a8] text-xs">WARRIOR</p>
//           </div>

//           {/* Stats */}
//           <div className="md:col-span-2 grid grid-cols-2 gap-3">
//             {[
//               { label: "STR", value: 85 },
//               { label: "AGI", value: 70 },
//               { label: "INT", value: 60 },
//               { label: "STA", value: 90 },
//             ].map((stat, i) => (
//               <div
//                 key={i}
//                 className="bg-[#0f3460] border-2 border-black p-3 shadow-[3px_3px_0px_#000]"
//               >
//                 <p className="text-xs text-[#a8a8a8]">{stat.label}</p>
//                 <p className="text-lg text-[#f5f5f5]">
//                   {stat.value}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex justify-end gap-3 mt-5">
//           <button className="bg-[#ff9f1c] text-black px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
//             ATTACK
//           </button>
//           <button className="bg-[#2ec4b6] text-black px-4 py-2 border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition">
//             HEAL
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }