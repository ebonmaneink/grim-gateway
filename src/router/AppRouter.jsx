import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Sources from "../pages/sources/Sources";
import BasicRules from "../pages/sources/basicRules/BasicRules";
import NotFound from "../pages/notFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sources" element={<Sources />} />
      <Route path="/sources/basic-rules" element={<BasicRules />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
