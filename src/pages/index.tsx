// ** React Imports
import { MouseEvent, ReactNode, useState } from "react";

// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Components
import {
  Box,
  TextField,
  InputLabel,
  Typography,
  IconButton,
  CardContent,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard, { CardProps } from "@mui/material/Card";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";
import BlankLayout from "src/@core/layouts/BlankLayout";
import FooterIllustrationsV1 from "src/views/pages/auth/FooterIllustration";
// import { AuthContext } from "../../context/auth/AuthContext";
import { FormHelperText } from "@mui/material";
import useForm from "src/@core/hooks/useForm";
import Navbar from "src/@core/components/Common/Navbar";
import axios from "axios";

const data = [
  {
    email: "admin@gmail.com",
    password: "admin",
  },
];

// interface State {
//   // password: string;
//   isShowPassword: boolean;
//   // email: string;
// }

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const StyledImage = styled("img")({
  objectFit: "scale-down",
  height: "100px",
  width: "150px",
});

const LoginPage = () => {
  const [loading, setLoading] = useState<any>(false);
  const [isError, setIsError] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<Boolean>(false);

  // ** Hook
  const theme = useTheme();

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const router = useRouter();

  const { values, errors, handleChange } = useForm(() => null, null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.post("/api/login", values);

    if (data.data?.status === 200) {
      router.push("/dashboard");
    } else {
      setIsError(data.data?.message);
    }
  };

  return (
    <>
      <Navbar />
      <Box className="content-center">
        <Card sx={{ zIndex: 1 }}>
          <CardContent
            sx={{
              padding: (theme) => `${theme.spacing(12, 9, 7)} !important`,
            }}
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
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, marginBottom: 1.5 }}
              >
                Welcome to Oak Island Investments!
              </Typography>
              <Typography variant="body2">
                Please sign-in to your account
              </Typography>
              {/* <h3>
              {loginFailed}
            </h3> */}
              <Typography sx={{ color: theme?.palette?.error?.main }}>
                {isError}
              </Typography>
            </Box>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                autoFocus
                fullWidth
                id="email"
                label="Email"
                name="email"
                sx={{ marginBottom: 4 }}
                required
                error={errors.email ? true : false}
                helperText={errors.email && errors.email}
                onChange={handleChange}
                // onChange={(e) => setEmail(e.target.value)}
                // onChange={handleChange('email')}
              />
              <FormControl fullWidth>
                <InputLabel htmlFor="auth-login-password">Password</InputLabel>
                <OutlinedInput
                  label="Password"
                  // value={values.password}
                  id="auth-login-password"
                  name="password"
                  required
                  error={errors.password ? true : false}
                  onChange={handleChange}
                  // onChange={(e) => setPassword(e.target.value)}
                  // onChange={handleChange('password')}
                  type={isShowPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label="toggle password visibility"
                      >
                        {isShowPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <FormHelperText error={errors.password ? true : false}>
                    {errors.password}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {/* <FormControlLabel control={<Checkbox />} label="Remember Me" /> */}
                <div></div>
                <Link href="/forgot-password">
                  <LinkStyled
                    sx={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/forgot-password");
                    }}
                  >
                    Forgot Password?
                  </LinkStyled>
                </Link>
              </Box>
              <LoadingButton
                type="submit"
                fullWidth
                size="large"
                loading={loading}
                variant="contained"
                sx={{ marginBottom: 7 }}
              >
                Login
              </LoadingButton>
            </form>
          </CardContent>
        </Card>
        <FooterIllustrationsV1 />
      </Box>
    </>
  );
};

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default LoginPage;
