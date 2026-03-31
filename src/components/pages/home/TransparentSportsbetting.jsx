import { Box, Typography, Button } from "@mui/material";

function TransparentSportsbetting() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "32px",
        pb: "0",
      }}
    >
      <Box
        sx={{
          maxWidth: 1150,
          width: "100%",
          background: "linear-gradient(to right,#031C46,#06409E)",
          color: "white",
          borderRadius: 2,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box sx={{ p: { xs: 1, md: "24px 24px 0" }, flex: 1 }}>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "32px" },
              fontWeight: "semibold",
              letterSpacing: 0,
              maxWidth: "900px",
            }}
          >
            The Most Transparent Sportsbetting Location
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, md: "18px" },
              color: "#bfdbfe",
              mb: "20px",
            }}
          >
            Subscribe To World Class Sportbettors On Display Right In Front Of
            You.
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#2ea3f2",
              "&:hover": { backgroundColor: "#1e88e5" },
              fontSize: "16px",
              px: 3,
              py: 1.5,
            }}
          >
            View Leaderboards
          </Button>
        </Box>
        <Box
          component="img"
          src="/leaderboard.png"
          alt="leaderboard"
          sx={{
            height: "100%",
            width: "auto",
            objectFit: "cover",
            display: { xs: "none", lg: "block" },
            alignSelf: "stretch",
          }}
        />
      </Box>
    </Box>
  );
}

export default TransparentSportsbetting;
