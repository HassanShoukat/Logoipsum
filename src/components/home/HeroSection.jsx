import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";

import ChatIcon from "../../icons/ChatIcon";
import Statusicon from "../../icons/Statusicon";
import Shopicon from "../../icons/Shopicon";
import Subscribeicon from "../../icons/Subscribeicon";
import Bellicon from "../../icons/Bellicon";

function HeroSection() {
  const cards = [
    {
      title: "Become a betexpert",
      description: "Showcase Your Sportsbetting Skills & Get Ranked",
      gradient: "linear-gradient(to right,#031C46,#06409E)",
      button: "Become a betexpert",
      items: [
        {
          icon: <ChatIcon />,
          title: "Post Winning Bets",
          desc: "Send your bets to your subscribers",
        },
        {
          icon: <Statusicon />,
          title: "Get Ranked On The Leaderboards",
          desc: "Gain attention & acquire more subscribers",
        },
        {
          icon: <Statusicon />,
          title: "Gain Subscribers",
          desc: "Get paid every time you gain a subscriber",
        },
      ],
    },
    {
      title: "Become a subscriber",
      description: "Receive Bets From The Internet's Greatest Sportsbettors",
      gradient: "linear-gradient(to right,#8E52FF,#B893FF)",
      button: "Become a subscriber",
      items: [
        {
          icon: <Shopicon />,
          title: "Shop Betexperts On Leaderboards",
          desc: "Find the most profitable bettors",
        },
        {
          icon: <Subscribeicon />,
          title: "Subscribe To Your Favorite Bettors",
          desc: "Select a subscription plan Betexperts you love",
        },
        {
          icon: <Bellicon />,
          title: "Gain Access To All Future Bets",
          desc: "Get notified every time they make a bet",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        textAlign: "center",
        color: "white",
        background: "linear-gradient(to right,#052d61,#05244d,#5d7cb4)",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto", px: 2 }}>
        <Box mb={2}>
          <Box
            component="img"
            src="/logo.png"
            sx={{
              width: { xs: 120, sm: 140, md: 170 },
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "#6ec1ff",
            fontSize: { xs: 11, md: "20px" },
            fontWeight: 600,
            mb: 1,
          }}
        >
          THE SPORTSBETTING LEADERBOARDS
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "1.6rem",
              sm: "2rem",
              md: "63px",
            },
            mb: 2,
            fontFamily: "Bebas Neue",
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: "100%",
          }}
        >
          WIN MORE BETS WITH BETEXPERTS YOU TRUST
        </Typography>
        <Typography
          sx={{
            color: "#cbd5e1",
            fontSize: { xs: 14, md: "18px" },
            mb: 2,
            px: { xs: 1, md: 0 },
            fontWeight: 400,
          }}
        >
          Find & Subscribe the best bettors on the internet using the
          Sportsbetting Leaderboards
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#2ea3f2",
            textTransform: "none",
            px: { xs: 3, md: 4 },
            py: { xs: 1, md: 1.2 },
            mb: { xs: 2, md: 4 },
            fontSize: { xs: 14, md: "16px" },
            fontWeight: 400,
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Choose your own path
        </Button>
      </Box>
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          backgroundImage: {
            md: "url('/image.png')",
          },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          py: { xs: 2, md: 14 },
        }}
      >
        <Grid container spacing={{ xs: 2, md: 12 }} justifyContent="center">
          {cards.map((card, i) => (
            <Grid
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <Card
                sx={{
                  width: { xs: 240, md: "392px" },
                  borderRadius: 3,
                  boxShadow: 6,
                  textAlign: "left",
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2.5, md: 3 },
                  }}
                >
                  <Typography
                    fontWeight="semibold"
                    sx={{
                      fontSize: { xs: 16, md: "20px" },
                      fontWeight: 600,
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "gray",
                      mb: 1,
                      fontSize: { xs: 10, md: "12px" },
                      fontWeight: 400,
                    }}
                  >
                    {card.description}
                  </Typography>
                  {card.items.map((item, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1.5, md: 2 },
                        background: "#f3f4f6",
                        borderRadius: 2,
                        p: { xs: 1.2, md: "10px" },
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          background: card.gradient,
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          p: { xs: 0.8, md: 1 },
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography
                          fontWeight="semibold"
                          sx={{
                            fontSize: { xs: 13, md: "15px" },
                            fontWeight: 600,
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: { xs: 11, md: 12 },
                            color: "gray",
                          }}
                        >
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      textTransform: "none",
                      fontSize: { xs: 14, md: 15 },
                      py: { xs: 1, md: 1.2 },
                    }}
                  >
                    {card.button}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default HeroSection;
