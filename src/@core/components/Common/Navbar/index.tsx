import * as React from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { left } from "@popperjs/core";
const StyledImage = styled("img")({
  objectFit: "contain",
  height: "70px",
});
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    title: "Contact",
    route: "/contact",
  },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <StyledImage
        // style={{ background: theme?.palette?.primary?.main }}
        src="/images/Logo.png"
      />
      <List>
        {navItems.map((item: any) => (
          <ListItem key={item?.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center", display: "flex" }}>
              <ListItemText
                primary={item?.title}
                onClick={() => changeRoute(item?.route)}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const changeRoute = (route) => {
    router.push(route);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <StyledImage
                  // style={{ background: theme?.palette?.primary?.main }}
                  src="/images/Logo.png"
                />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    margin: "10px !important",
                  },
                  color: "#fff",
                }}
              >
                <a onClick={() => changeRoute("/")}>
                  <h3>Oak Island Investments</h3>
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item: any) => (
                <Button
                  key={item.title}
                  sx={{ color: "#fff" }}
                  onClick={() => changeRoute(item?.route)}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
