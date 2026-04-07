// import frameworkData from "./framework.json";

// export default function FrameworkList() {
//     return (
//         <div className="p-8">
//             {frameworkData.map((item) => (
//                 <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
//                     <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
//                     <p className="text-gray-600">{item.description}</p>
//                     <p className="text-sm text-gray-500">Developer: <span className="font-semibold">{item.details.developer}</span>({item.details.releaseYear})</p>
//                     <p className="text-sm text-gray-500">Official Website: <a href={item.details.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Visit Website</a></p>
//                     {item.tags.map((tag, index) => (
//                         <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
//                             {tag}
//                         </span>
//                     ))}
//                 </div>


//             ))}

//         </div>
//     )
// }

import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-black p-10">
            {frameworkData.map((item) => (
                <div
                    key={item.id}
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-6 mb-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-indigo-500/30 hover:-translate-y-2"
                >
                    {/* efek glow bintang */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <h2 className="relative text-2xl font-bold text-white mb-2 transition group-hover:text-indigo-300">
                        {item.name}
                    </h2>

                    <p className="relative text-slate-300 mb-4 leading-relaxed transition group-hover:text-slate-200">
                        {item.description}
                    </p>

                    <p className="relative text-sm text-slate-400 mb-1">
                        Developer:{" "}
                        <span className="font-semibold text-slate-200 group-hover:text-indigo-300 transition">
                            {item.details.developer}
                        </span>{" "}
                        <span className="text-slate-500">
                            ({item.details.releaseYear})
                        </span>
                    </p>

                    <p className="relative text-sm text-slate-400 mb-4">
                        Official Website:{" "}
                        <a
                            href={item.details.officialWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 font-medium hover:text-indigo-300 hover:underline transition duration-300"
                        >
                            Visit Website
                        </a>
                    </p>

                    <div className="relative flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-400/20 transition-all duration-300 hover:bg-indigo-400 hover:text-white hover:scale-110 hover:shadow-md hover:shadow-indigo-500/40 cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* efek "bintang" glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                </div>
            ))}
        </div>
    );
}



