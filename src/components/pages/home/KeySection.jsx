import { Box, Typography, Stack, Button } from "@mui/material";
import { ComparisonData } from "../../../utils/ComparisonData";

function KeySection() {
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
          backgroundColor: "white",
          borderRadius: 2,
          p: 3,
          boxShadow: 1,
          width: "100%",
          maxWidth: 1150,
        }}
      >
        <Typography
          sx={{
            color: "#2563eb",
            fontSize: "16px",
            fontWeight: 700,
            mb: 1,
          }}
        >
          The Key To Trust & Transparency In Betting
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 20, md: "32px" },
                fontWeight: "semibold",
                color: "#1f2937",
              }}
            >
              Leaderboards Drive Your Betting Success
            </Typography>
            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "16px",
                mb: 1,
              }}
            >
              Its the key ingredient to increasing the number of profitable
              sportsbettors,
              <br />
              by betting together
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              fontSize: "16px",
              textTransform: "none",
              backgroundColor: "#3b82f6",
              "&:hover": { backgroundColor: "#2563eb" },
            }}
          >
            Get Started Now
          </Button>
        </Box>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          {ComparisonData.map((card, index) => {
            const Icon = card.icon;
            return (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  border: "1px solid #e5e7eb",
                  borderRadius: 2,
                  bgcolor: "#f3f4f6",
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: index === 0 ? "#B50E0E1A" : "#0E7A0E1A",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon />
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <Typography
                    fontWeight={"semibold"}
                    fontSize={"20px"}
                    color="#1f2937"
                  >
                    {card.title}
                  </Typography>
                </Box>
                <Stack spacing={1}>
                  {card.items.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <Box key={i} display="flex" alignItems="center" gap={1}>
                        <ItemIcon />
                        <Typography fontSize={"16px"} color="#6b7280">
                          {item.text}
                        </Typography>
                      </Box>
                    );
                  })}
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default KeySection;
