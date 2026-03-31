import { RankingData } from "../../../utils/RankingData";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  Button,
  Paper,
} from "@mui/material";

function RankingSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: "32px",
        py: "24px",
      }}
    >
      <Paper sx={{ maxWidth: 1150, width: "100%", p: 3, borderRadius: 2 }}>
        <Box mb={"20px"}>
          <Typography
            sx={{
              color: "#2563eb",
              fontSize: "16px",
              fontWeight: 700,
              mb: "4px",
            }}
          >
            Complete Transparency
          </Typography>
          <Typography
            fontWeight={"semibold"}
            sx={{ fontSize: { sx: 20, md: "32px" }, mb: "4px" }}
          >
            Ranking Betexperts On The Leaderboards
          </Typography>
          <Typography fontSize={"16px"} color="text.secondary">
            Betleaders empowers you to follow self-proclaimed expert sports
            betters by ranking
            <br /> them on the ultimate tool for transparency and trust: the
            sports betting leaderboards.
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={"20px"}
          mb={"20px"}
        >
          {RankingData.map((item, index) => (
            <Box key={item.number} sx={{ flex: 1 }}>
              <Card
                sx={{
                  bgcolor: "#f3f4f6",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: "20px" }}>
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      bgcolor: "#1e3a8a",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {item.number}
                  </Box>

                  <Typography fontWeight={"semibold"} fontSize={"20px"} mb={1}>
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mt: index === 0 ? 6 : index === 2 ? 4 : 1,
                      fontSize: { xs: 12, md: "16px" },
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
        <Box
          sx={{
            background: "linear-gradient(to right,#031C46,#06409E)",
            color: "white",
            p: 2.5,
            borderRadius: 2,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { md: "center" },
            gap: 2,
          }}
        >
          <Box>
            <Typography fontWeight={"semibold"} fontSize={"20px"} mb={"4px"}>
              Want to finally be a profitable sportsbettor?
            </Typography>
            <Typography fontSize={"16px"} sx={{ color: "#bfdbfe" }}>
              Use the leaderboards & find the most profitable sportsbettors
              <br /> to tail their picks and start betting like a pro!
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              fontSize: "16px",
              textTransform: "none",
              backgroundColor: "#3b82f6",
              "&:hover": { backgroundColor: "#2563eb" },
              py: "12px",
              px: "24px",
            }}
          >
            Choose Your Path
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default RankingSection;
