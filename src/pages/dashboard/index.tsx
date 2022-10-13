import { Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        marginTop: "200px",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
        Welcome to Oak Island Investments! 👋🏻
      </Typography>
    </Box>
  );
};

export default Dashboard;
