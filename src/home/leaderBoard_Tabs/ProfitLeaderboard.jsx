import { useState } from "react";
import { Box, Typography, Button, Avatar, Chip } from "@mui/material";

import Warning from "../../icons/Warning";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ProfitLeaderboard() {
  const [timeframe, setTimeframe] = useState("7D");

  const data = Array.from({ length: 10 }, () => ({
    name: "@allankoss",
    record: "18-2",
    win: "82%",
    profit: "+15U",
    sports: ["NFL", "NBA"],
    odds: ["+400 to +600", "+1000 to +1499"],
  }));

  const rowsByTimeframe = {
    Yesterday: 3,
    "7D": 10,
    "1M": 5,
    "3M": 6,
    "6M": 7,
    "1Y": 8,
    "All time": 10,
  };

  const visibleData = data.slice(0, rowsByTimeframe[timeframe]);

  const buttons = ["Yesterday", "7D", "1M", "3M", "6M", "1Y", "All time"];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#0f4a3a",
          color: "white",
          borderRadius: 2,
          p: { xs: 2, md: 3 },
          textAlign: "center",
        }}
      >
        <Typography fontSize={{ xs: 18, md: 24 }} fontWeight="bold" mb={1}>
          THE PROFITABILITY LEADERBOARD
        </Typography>
        <Typography fontSize={14} color="#d1fae5" mb={3}>
          This Leaderboard Displays The Betexperts That Have The Highest Profit
          Within The Selected Timeframe
        </Typography>
        <Box
          display="flex"
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: { md: "center" },
          }}
          gap={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
                lg: "flex",
              },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box>
              <Warning />
            </Box>
            <Typography fontSize={13}>
              Minimum Bets To Qualify For 7D Leaderboard: 10 Bets
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                background: "white",
                p: 1,
                borderRadius: 1,
              }}
            >
              {buttons.map((btn) => (
                <Button
                  key={btn}
                  onClick={() => setTimeframe(btn)}
                  sx={{
                    display: { xs: "none", md: "block" },
                    textTransform: "none",
                    minWidth: "auto",
                    px: 1.5,
                    py: 0.5,
                    whiteSpace: "nowrap",
                    backgroundColor: timeframe === btn ? "black" : "white",
                    color: timeframe === btn ? "white" : "black",
                  }}
                >
                  {btn}
                </Button>
              ))}
            </Box>
            <Button
              variant="contained"
              sx={{
                py: 1,
                backgroundColor: "white",
                color: "black",
                textTransform: "none",
              }}
            >
              All Sports <ExpandMoreIcon />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: "80px 3fr 1fr 1fr .75fr 120px",
            fontSize: 14,
            color: "gray",
            p: 2,
            mt: 1,
            bgcolor: "rgba(0,0,0,15%)",
            borderRadius: 2,
            boxShadow: 4,
          }}
        >
          <span>Rank</span>
          <span>Betexpert</span>
          <span>Record</span>
          <span>Win pct%</span>
          <span>Profit</span>
          <span>Add To Watchlist</span>
        </Box>
        {visibleData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "50px 1fr",
                md: "80px 3fr 1fr 1fr .75fr 120px",
              },
              alignItems: "center",
              gap: { xs: 1, md: 0 },
              py: 2,
              px: { xs: 1, md: 2 },
              border: "1px solid #e5e7eb",
              borderTop: index === 0 ? "none" : "1px solid #e5e7eb",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#e5e7eb",
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              {index + 1}
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar src="/Ellipse.png" />
              <Box>
                <Typography
                  fontWeight={700}
                  sx={{ color: "black", fontSize: 12 }}
                >
                  {item.name}
                </Typography>
                <Box mt={0.5} display="flex" flexWrap="wrap" gap={0.5}>
                  {item.sports.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: "#ede9fe",
                        color: "#7c3aed",
                        fontSize: 10,
                      }}
                    />
                  ))}
                  {item.odds.map((tag, i) => (
                    <Chip
                      key={i}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: "#dbeafe",
                        color: "#2563eb",
                        fontSize: 10,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" }, color: "black" }}>
              <Typography>{item.record}</Typography>
            </Box>
            <Box sx={{ display: { xs: "none", md: "block" }, color: "black" }}>
              <Typography>{item.win}</Typography>
            </Box>
            <Typography
              sx={{
                display: { xs: "none", md: "flex" },
                color: "#2563eb",
                fontWeight: 600,
                alignItems: "center",
              }}
            >
              {item.profit}
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: 36,
                height: 36,
                minWidth: 36,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                mx: "auto",
              }}
            >
              +
            </Button>
          </Box>
        ))}
      </Box>
    </>
  );
}
