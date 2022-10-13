import { Typography, Box } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        marginTop: "200px",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
        Headquarters 501 Congress Ave. Suite 305, Austin, TX 78701
        <br /> +1 (512) 588-3339 <br />
        hq@oakislandinvestments.net <br /> Technical Support
        <br />
        help@oakislandinvestments.net
      </Typography>
    </Box>
  );
};

export default Contact;
