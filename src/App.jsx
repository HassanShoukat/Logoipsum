import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";

function App() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <>
      <CssBaseline />
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />

        <Box
          sx={{
            minHeight: "100vh",
          }}
        ></Box>
      </Box>
      <Footer />
    </>
  );
}

export default App;
