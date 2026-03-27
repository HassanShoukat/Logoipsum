import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";

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
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to right, #031C46, #06409E)",
        color: "#fff",
      }}
    >
      <Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            borderRight: { md: "1px solid #ffffff33" },
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              component="img"
              src="/logo.png"
              alt="logo"
              sx={{ width: 140, mb: 6 }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton sx={{ color: "#fff", "&:hover": { color: "#90caf9" } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", "&:hover": { color: "#90caf9" } }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton sx={{ color: "#fff", "&:hover": { color: "#90caf9" } }}>
              <EmailIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={9} sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ffffff33",
              pb: { xs: 2, md: 4 },
              mb: 2,
            }}
          >
            <Typography variant="h6" fontWeight={600}>
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
                px: 2,
                py: 0.5,
                fontSize: "0.8rem",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
            >
              Go to top <KeyboardArrowUpIcon />
            </Button>
          </Box>
          <Grid container spacing={4} sx={{ pt: { xs: 2, md: 4 } }}>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">Home</Typography>
              <Typography variant="body2">
                Sportsbetting Leaderboards
              </Typography>
              <Typography variant="body2">Master Sportsbook</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">Search Betexperts</Typography>
              <Typography variant="body2">My Betting Group</Typography>
              <Typography variant="body2">About</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="body2">Privacy Policy</Typography>
              <Typography variant="body2">Terms of Service</Typography>
              <Typography variant="body2">Cookies</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontSize: "12px", color: "#90caf9", mb: 1.5 }}>
                Subscribe to our newsletter for the latest
                <br /> features, updates, and opportunities.
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
                      px: 1.5,
                      py: 1,
                      color: "#fff",
                      fontSize: "0.9rem",
                      "&::placeholder": { color: "#90caf9" },
                    },
                  }}
                  sx={{ flex: 1 }}
                />
                <Button
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: "#3b82f6",
                    minWidth: "auto",
                    px: 2,
                    "&:hover": { backgroundColor: "#2563eb" },
                  }}
                >
                  <ArrowForwardIcon sx={{ color: "#fff" }} />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ color: "#90caf9", mt: 4 }}>
            © 2025 - Betexpert. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
