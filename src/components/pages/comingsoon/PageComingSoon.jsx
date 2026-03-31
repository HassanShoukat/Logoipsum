import { Box, Typography } from "@mui/material";

export default function PageComingSoon({ page }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        backgroundColor: "#f3f4f6",
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#374151",
          mb: 1.5,
        }}
      >
        {page}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#6b7280",
          fontSize: "18px",
        }}
      >
        This page is coming soon
      </Typography>
    </Box>
  );
}
