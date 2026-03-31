import { useState } from "react";
import { Box, Typography, IconButton, TextField, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to right, #031C46, #06409E)",
        color: "#fff",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        px: { xs: 3, md: 4 },
        py: { xs: 4, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          borderRight: { md: "1px solid #ffffff33" },
          pr: { md: 4 },
          pb: { xs: 4, md: 0 },
          mb: { xs: 4, md: 0 },
          minWidth: { md: "200px" },
        }}
      >
        <Box component="img" src="/logo.png" alt="logo" sx={{ width: 140 }} />
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          {[LinkedInIcon, YouTubeIcon, EmailIcon].map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                color: "#fff",
                "&:hover": { color: "#90caf9", transform: "scale(1.1)" },
                transition: "all 0.2s",
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          pl: { md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            borderBottom: "1px solid #ffffff33",
            pb: 3,
            mb: 4,
            gap: 2,
          }}
        >
          <Typography variant="h1" fontSize={"42px"} fontWeight={"semibold"}>
            Your Betting Career Starts Here..
          </Typography>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#fff",
              color: "#0b2a52",
              px: { xs: 1.5, md: 2 },
              py: { xs: 0.3, md: 0.5 },
              fontSize: { xs: "0.7rem", md: "16px" },
              "&:hover": { backgroundColor: "#e3f2fd" },
            }}
          >
            Go to top <KeyboardArrowUpIcon fontSize="small" />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {[
            ["Home", "Sportsbetting Leaderboards", "Master Sportsbook"],
            ["Search Betexperts", "My Betting Group", "About"],
            ["Privacy Policy", "Terms of Service", "Cookies"],
          ].map((links, i) => (
            <Box key={i} sx={{ flex: "1 1 200px" }}>
              {links.map((link, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    color: i === 2 ? "#FFFEFE80" : "white",
                    marginY: 3,
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          ))}
          <Box sx={{ flex: "1 1 250px" }}>
            <Typography
              sx={{ fontSize: "0.8rem", color: "#90caf9", mb: 4, mt: 3 }}
            >
              Subscribe to our newsletter for the latest
              <br />
              features, updates, and opportunities.
            </Typography>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#1e3a8a",
                borderRadius: 1,
                overflow: "hidden",
              }}
            >
              <TextField
                variant="standard"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    px: 2,
                    py: 1,
                    color: "#fff",
                    fontSize: "0.9rem",
                    "&::placeholder": { color: "#90caf9" },
                  },
                }}
                sx={{ flex: 1, height: "40px" }}
              />
              <Button
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#3b82f6",
                  minWidth: "auto",
                  px: 2,
                  height: "40px",
                  "&:hover": { backgroundColor: "#2563eb" },
                }}
              >
                <ArrowForwardIcon sx={{ color: "#fff" }} />
              </Button>
            </Box>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: "#FFFEFE80", mt: 6 }}>
          © 2025 - Betexpert. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
