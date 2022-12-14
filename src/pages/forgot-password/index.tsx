// ** React Imports
import { ReactNode, useState } from "react";

// ** Next Imports
import { useRouter } from "next/router";

// ** MUI Components
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import MuiCard, { CardProps } from "@mui/material/Card";
import LoadingButton from "@mui/lab/LoadingButton";
import Navbar from "src/@core/components/Common/Navbar";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Demo Imports
import FooterIllustrationsV1 from "src/views/pages/auth/FooterIllustration";
import axios from "axios";

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const StyledImage = styled("img")({
  objectFit: "contain",
  height: "70px",
});

const ForgotPassword = () => {
  const theme = useTheme();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (email) {
      setError("");

      const data = await axios.get("https://oak-api-app.herokuapp.com/forget");

      setMessage(data?.data?.message);
    } else {
      setError("Email is required!");
    }
  };

  return (
    <>
      <Navbar />
      <Box className="content-center">
        <Card sx={{ zIndex: 1 }}>
          <CardContent
            sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
          >
            <Box
              sx={{
                mb: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledImage
                style={{ background: theme?.palette?.primary?.main }}
                src="/images/Logo.png"
              />
            </Box>
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              {message}
            </Typography>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, marginBottom: 1.5 }}
              >
                Forgot Password
              </Typography>
            </Box>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                autoFocus
                fullWidth
                id="email"
                name="email"
                required
                error={error ? true : false}
                helperText={error}
                label="Email"
                sx={{ marginBottom: 4 }}
                onChange={(e) => {
                  setMessage("");
                  setEmail(e.target.value);
                }}
              />
              <LoadingButton
                fullWidth
                size="large"
                variant="contained"
                sx={{ marginBottom: 4 }}
                onClick={handleSubmit}
              >
                Submit
              </LoadingButton>
              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{ marginBottom: 4 }}
                onClick={() => {
                  router.push("/");
                }}
              >
                Back
              </Button>
            </form>
          </CardContent>
        </Card>
        <FooterIllustrationsV1 />
      </Box>
    </>
  );
};

ForgotPassword.getLayout = (page: ReactNode) => (
  <BlankLayout>{page}</BlankLayout>
);

export default ForgotPassword;
