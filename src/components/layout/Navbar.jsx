import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ activeMenu, setActiveMenu }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    "Home",
    "Sportsbetting Leaderboards",
    "Master Sportsbook",
    "Search Betexperts",
    "My Betting Group",
    "About",
  ];

  return (
    <AppBar
      position="unset"
      sx={{
        background: "linear-gradient(to right, #031C46, #06409E)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, md: "32px" },
          py: "16px",
        }}
      >
        <Box sx={{ width: 180 }}>
          <img src="logo.png" alt="Logo" width="100%" />
        </Box>
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            gap: "32px",
            px: 2,
          }}
        >
          {menus.map((menu, index) => (
            <Typography
              key={index}
              onClick={() => setActiveMenu(menu)}
              sx={{
                cursor: "pointer",
                color: activeMenu === menu ? "white" : "#FFFEFE80",
                fontWeight: activeMenu === menu ? 600 : 400,
                "&:hover": { color: "white" },
                fontSize: "16px",
              }}
            >
              {menu}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            variant="outlined"
            sx={{
              fontSize: "16px",
              borderColor: "#0B99FF",
              color: "#0B99FF",
              "&:hover": {
                backgroundColor: "#1976d2",
                color: "#fff",
              },
            }}
          >
            Login / Sign Up
          </Button>
        </Box>
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>
      {menuOpen && (
        <Box sx={{ display: { md: "none" } }}>
          {menus.map((menu, index) => (
            <Typography
              key={index}
              onClick={() => {
                setActiveMenu(menu);
                setMenuOpen(false);
              }}
              sx={{
                px: 2,
                py: 0.75,
                cursor: "pointer",
                borderRadius: 1,
                "&:hover": { backgroundColor: "#1565c0" },
                color: activeMenu === menu ? "black" : "white",
                fontWeight: activeMenu === menu ? 600 : 400,
              }}
            >
              {menu}
            </Typography>
          ))}

          <Box sx={{ px: 2, mt: 1 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "#0B99FF",
                color: "#0B99FF",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
              }}
            >
              Login / Sign Up
            </Button>
          </Box>
        </Box>
      )}
    </AppBar>
  );
}

export default Navbar;
