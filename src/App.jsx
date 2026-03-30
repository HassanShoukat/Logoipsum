import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import HeroSection from "./home/HeroSection";
import TransparentSportsbetting from "./home/TransparentSportsbetting";
import Betleaders from "./home/Betleaders";
import LeaderboardSection from "./home/LeaderboardSection";
import RankingSection from "./home/RankingSection";
import FaqSection from "./home/FaqSection";

function App() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        bgcolor: "#0f172a",
        color: "#fff",
        overflow: "auto",
        lineHeight: 0,
      }}
    >
      <CssBaseline />
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Box
          sx={{
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HeroSection />
          <TransparentSportsbetting />
          <Betleaders />
          <LeaderboardSection />
          <RankingSection />
          <FaqSection />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
