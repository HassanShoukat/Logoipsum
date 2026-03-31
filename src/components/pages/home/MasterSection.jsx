import { Box, Typography, Stack, Button } from "@mui/material";
import Tickicon from "../../../icons/Tickicon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
];

const cards = [
  "Accurate Odds Pulled Directly From Each Sportsbook In Real Time",
  "No Real Money Required To Wager",
  "Odds From Over 6 Different Sportsbooks",
];

function MasterSection() {
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
          The Master Sportsbook
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={2}
          mb={1}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 20, md: "32px" },
                fontWeight: "semibold",
                color: "#1f2937",
              }}
            >
              Bet On the Master Sportsbook & Find the Best Odds
            </Typography>
            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "16px",
                maxWidth: 800,
              }}
            >
              Never settle for the worst odds again!
              <br />
              Maximize your profit by placing your bet on right sportsbook.
              Quickly compare odds for your
              <br />
              selections across over 6 different sportsbooks to ensure you're
              winning the most money from your bet.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#3b82f6",
              "&:hover": { backgroundColor: "#2563eb" },
              fontSize: "16px",
            }}
          >
            The Master Sportsbook
          </Button>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} mb={4}>
          {cards.map((text, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                bgcolor: "#f3f4f6",
              }}
            >
              <Tickicon />
              <Typography
                fontSize={"16px"}
                color="#374151"
                sx={{ mt: index === 1 || index === 2 ? 3 : "" }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          loop
          autoplay={{ delay: 1000 }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <Box
                component="img"
                src={logo}
                sx={{
                  height: 24,
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default MasterSection;
