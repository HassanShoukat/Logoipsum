import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/pages/home/HeroSection";
import TransparentSportsbetting from "./components/pages/home/TransparentSportsbetting";
import Betleaders from "./components/pages/home/Betleaders";
import LeaderboardSection from "./components/pages/home/LeaderboardSection";
import RankingSection from "./components/pages/home/RankingSection";
import FaqSection from "./components/pages/home/FaqSection";
import KeySection from "./components/pages/home/KeySection";
import MasterSection from "./components/pages/home/MasterSection";
import AccountSection from "./components/pages/home/AccountSection";

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
            overflowX: "hidden",
            backgroundColor: "#f3f4f6",
          }}
        >
          <HeroSection />
          <TransparentSportsbetting />
          <Betleaders />
          <LeaderboardSection />
          <RankingSection />
          <KeySection />
          <AccountSection />
          <MasterSection />
          <FaqSection />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
