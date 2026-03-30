import { Box, Typography } from "@mui/material";

export default function ComingSoon({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, color: "gray", mb: 1 }}>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ color: "gray" }}>
        This leaderboard will be available soon.
      </Typography>
    </Box>
  );
}
