import { useState } from "react";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";

import ProfitLeaderboard from "./leaderBoard-Tabs/ProfitLeaderboard";
import ComingSoon from "./leaderBoard-Tabs/ComingSoon";

export default function LeaderboardSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 1150,
          width: "100%",
          backgroundColor: "white",
          borderRadius: 2,
          p: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
            mb: 3,
          }}
        >
          <Box sx={{ maxWidth: 600 }}>
            <Typography
              sx={{
                fontWeight: "semibold",
                color: "black",
                mb: 0.5,
                fontSize: { sx: 20, md: "32px" },
              }}
            >
              The Sportsbetting Leaderboards
            </Typography>

            <Typography
              sx={{ color: "gray", fontSize: "16px", fontWeight: 400 }}
            >
              Over 18+ Leaderboards To Help You Effortlessly Locate The
              <br /> Best Sportsbettors On The Internet
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#3b82f6",
              "&:hover": { backgroundColor: "#2563eb" },
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            View Leaderboards
          </Button>
        </Box>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          sx={{
            borderBottom: "1px solid #e5e7eb",
            mb: 1,
          }}
        >
          <Tab
            label="Profitability Leaderboard"
            sx={{ textTransform: "none", fontSize: "20px" }}
          />
          <Tab
            label="Win Rate Leaderboards"
            sx={{ textTransform: "none", fontSize: "20px" }}
          />
          <Tab
            label="Extra Leaderboards"
            sx={{ textTransform: "none", fontSize: "20px" }}
          />
        </Tabs>
        {activeTab === 0 && <ProfitLeaderboard />}
        {activeTab === 1 && (
          <Box
            sx={{
              width: "100%",
              minHeight: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ComingSoon title="Win Rate Leaderboard" />
          </Box>
        )}
        {activeTab === 2 && (
          <Box
            sx={{
              width: "100%",
              minHeight: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ComingSoon title="Extra Leaderboards" />
          </Box>
        )}
      </Box>
    </Box>
  );
}
