import { Box, Typography } from "@mui/material";

export default function Betleaders() {
  const payouts = ["+3.12 Units", "+5.47 Units", "+2.86 Units", "+7.25 Units"];

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: 2,
      }}
    >
      <Box sx={{ maxWidth: 1150, width: "100%" }}>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 10 },
          }}
        >
          <Box sx={{ width: { md: "50%" } }}>
            <Typography
              sx={{
                fontSize: { sx: 20, md: 28 },
                fontWeight: 600,
                color: "#1f2937",
                mb: 2,
              }}
            >
              Why Betleaders?
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box sx={{ borderLeft: "2px solid #3b82f6", pl: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#1f2937",
                    mb: 0.5,
                  }}
                >
                  Let's face it
                </Typography>
                <Typography sx={{ color: "#4b5563", fontSize: 14 }}>
                  Sportsbetting is tough. Sportsbooks are designed to stack the
                  odds
                  <br /> against you, making it difficult to turn a profit.
                </Typography>
              </Box>
              <Box sx={{ borderLeft: "2px solid #3b82f6", pl: 2 }}>
                <Typography sx={{ fontWeight: 600, color: "#1f2937", mb: 0.5 }}>
                  Yet
                </Typography>
                <Typography sx={{ color: "#4b5563", fontSize: 14 }}>
                  There are people out there cashing in bets and killing the
                  sportsbooks,
                  <br /> allowing them to profit week in-week out due to their
                  expert-level
                  <br /> betting strategies. Some even sportsbet for a living!
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                color: "#2563eb",
                fontWeight: 600,
                mt: 3,
              }}
            >
              That's where Betleaders Comes in!
            </Typography>
          </Box>
          <Box
            sx={{
              background: "linear-gradient(to right,#031C46,#06409E)",
              borderRadius: 2,
              px: 2,
              py: 3,
              display: { xs: "none", md: "block" },
            }}
          >
            {payouts.map((value, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: 1,
                  px: 3,
                  py: 1.5,
                  width: 220,
                  ml: index === 0 ? 0 : index === 1 ? 1 : index === 2 ? 3 : 5,
                  backgroundColor: index === 3 ? "#EAEEF0" : "white",
                  color: index === 3 ? "#1e3a8a" : "#374151",
                  mb: 1,
                }}
              >
                <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                  Payout
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#2563eb",
                  }}
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
