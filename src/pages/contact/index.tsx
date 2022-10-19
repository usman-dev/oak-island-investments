import { Typography, Box } from "@mui/material";
// import Navbar from "src/@core/components/Common/Navbar";

const Contact = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Box
        sx={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1.5 }}>
          <h1>
            <b>CONTACT US</b>
          </h1>
          <h2>Headquarters</h2>
          <h3>
            501 Congress Ave. Suite 305, Austin, TX 78701
            <br /> +1 (512) 588-3339 <br />
            hq@oakislandinvestments.net
          </h3>
          <br />
          <h2>Technical Support</h2>
          <h3>help@oakislandinvestments.net</h3>
        </Typography>
      </Box>
    </>
  );
};

export default Contact;
