import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import frameworkData from "./framework.json";
import FrameworkList from "./frameworkList";
import FrameworkListSearchFilter from "./frameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";

createRoot(document.getElementById("root"))
.render(
  <div>
    {/* <FrameworkListSearchFilter /> */}
    <ResponsiveDesign />
  </div>
)
