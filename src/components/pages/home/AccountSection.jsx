import { Box, Typography, Stack, Paper, Button } from "@mui/material";
import { AccountData } from "../../../utils/AccountData";

function AccountSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: 2,
      }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 3,
          borderRadius: 2,
          width: "100%",
          maxWidth: 1150,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#2563eb", mb: 1, fontSize: "16px", fontWeight: 700 }}
        >
          Account Type
        </Typography>
        <Typography fontWeight={"semibold"} fontSize={"32px"}>
          Choose Your Own Path On Betleaders
        </Typography>
        <Typography fontSize={"16px"} sx={{ color: "gray", mb: 2 }}>
          Choose Your Account Type And See How Easy It Is To Make Money
          Sportsbetting
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          {AccountData.map((account, index) => {
            const Icon = account.icon;
            return (
              <Stack
                key={index}
                spacing={2}
                sx={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 3,
                  p: 2,
                  bgcolor: "#f3f4f6",
                }}
              >
                <Typography
                  color="#2563eb"
                  sx={{ fontSize: "14px", fontWidth: "semibold" }}
                >
                  {account.subtitle}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ borderBottom: { md: "1px solid rgb(2, 28, 67,25%)" } }}
                >
                  <Box>
                    <Icon />
                  </Box>
                  <Stack>
                    <Typography
                      fontWeight="semibold"
                      sx={{ fontSize: { sx: "10px", md: "20px" } }}
                    >
                      {account.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      mb={1}
                      sx={{ fontSize: { sx: "10px", md: "14px" } }}
                    >
                      {account.description}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={1}>
                  {account.items.map((item, i) => (
                    <Stack key={i} direction="row" spacing={2}>
                      <Typography
                        sx={{
                          backgroundColor: "#e5e7eb",
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 10,
                          color: "black",
                        }}
                      >
                        {item.number}.
                      </Typography>
                      <Stack>
                        <Typography fontWeight="semibold" fontSize={"16px"}>
                          {item.title}
                        </Typography>
                        <Typography fontSize={"12px"} color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    fontSize: "16px",
                    backgroundColor: account.buttonClass.includes("071d3a")
                      ? "#071d3a"
                      : "#8E52FF",
                    "&:hover": {
                      backgroundColor: account.buttonClass.includes("071d3a")
                        ? "#000"
                        : "#6d28d9",
                    },
                  }}
                >
                  {account.buttonText}
                </Button>
              </Stack>
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
}

export default AccountSection;
