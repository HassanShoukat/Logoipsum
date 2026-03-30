import { Box, Typography, Button } from "@mui/material";

function TransparentSportsbetting() {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
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
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <Box sx={{ p: { xs: 2, md: 3 } }}>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 24 },
              fontWeight: 600,
              mb: 1,
            }}
          >
            The Most Transparent Sportsbetting Location
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 13, md: 14 },
              color: "#bfdbfe",
              mb: 2,
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
            objectFit: "cover",
            display: { xs: "none", lg: "block" },
          }}
        />
      </Box>
    </Box>
  );
}

export default TransparentSportsbetting;
