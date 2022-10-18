import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "src/@core/components/Common/Navbar";
// ** Next Imports
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
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
        <Button
          // fullWidth
          size="large"
          variant="contained"
          sx={{ marginBottom: 4 }}
          onClick={() => {
            router.push("/");
          }}
        >
          Back
        </Button>
      </Box>
    </>
  );
};

export default Contact;
