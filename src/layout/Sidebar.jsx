import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Drawer,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showProfitability, setShowProfitability] = useState(true);
  const [showProfit, setShowProfit] = useState(true);
  const [showOther, setShowOther] = useState(true);

  const items = [
    "(-1000 & Below)",
    "(-999 to -400)",
    "(-399 to -140)",
    "(-139 to +130)",
    "(+131 to +250)",
    "(+251 to +400)",
    "(+401 to +600)",
    "(+601 to +900)",
    "(+901 to +1400)",
    "(+1401 to +2999)",
    "(+3000 to +4999)",
    "(+5000 & Up)",
  ];

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#06285A",
        color: "#fff",
        p: 2,
      }}
    >
      <Box
        onClick={() => setShowProfitability(!showProfitability)}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
          mb: 1,
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          Profitability Leaderboard
        </Typography>
        {showProfitability ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </Box>
      <Collapse in={showProfitability}>
        <Typography variant="body2" sx={{ color: "#ccc", mb: 1, ml: 1.5 }}>
          Profitability
        </Typography>
      </Collapse>
      <Box>
        <Box
          onClick={() => setShowProfit(!showProfit)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Win Pct% Leaderboards
          </Typography>
          {showProfit ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        </Box>
        <Collapse in={showProfit}>
          <List dense>
            {items.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  cursor: "pointer",
                  color: "#ccc",
                  "&:hover": { color: "#fff" },
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Box>
      <Box>
        <Box
          onClick={() => setShowOther(!showOther)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Other Leaderboards
          </Typography>
          {showOther ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        </Box>
        <Collapse in={showOther}>
          <List dense>
            {[
              "Most Subscribed",
              "Most Liked Apps",
              "Longest Profit Streak",
              "Most Subscribed",
            ].map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  cursor: "pointer",
                  color: "#ccc",
                  "&:hover": { color: "#fff" },
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Box>
    </Box>
  );
  return (
    <>
      <IconButton
        onClick={() => setMobileOpen(true)}
        sx={{ display: { md: "none" }, color: "#000" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            bgcolor: "#0b2a52",
            color: "#fff",
            position: "unset",
            minHeight: "100vh",
            height: "100%",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Sidebar;
