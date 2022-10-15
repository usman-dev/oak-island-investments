import { Typography, Box } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        marginTop: "200px",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
        <h1><b>CONTACT US</b></h1>
        <h3>
        Headquarters <br/> 501 Congress Ave. Suite 305, Austin, TX 78701
        <br /> +1 (512) 588-3339, hq@oakislandinvestments.net 
        <br /> <br /> Technical Support
        <br />
        help@oakislandinvestments.net
        </h3>
      </Typography>
    </Box>
  );
};

export default Contact;
