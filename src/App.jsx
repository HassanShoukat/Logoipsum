import { useState } from "react";
import { Box, CssBaseline } from "@mui/material";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";

function App() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     height: "100vh",
    //     width: "100%",
    //     bgcolor: "#0f172a",
    //     color: "#fff",
    //     overflow: "auto",
    //   }}
    // >
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
    // </Box>
  );
}

export default App;
