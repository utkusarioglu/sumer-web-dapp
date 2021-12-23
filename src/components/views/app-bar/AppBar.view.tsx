import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectUserProfile } from "_/slices/user/user.slice";
import { setUserDrawerOpen, setWeb3DrawerOpen } from "_/slices/app/app.slice";
import { setAppDrawerOpen } from "_/slices/app/app.slice";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { APP_NAME } from "_/__config";

const AppBarView = () => {
  const userProfile = useSelector(selectUserProfile);

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setAppDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div" align="center">
              {APP_NAME}
            </Typography>
          </Box>
          {!!userProfile ? (
            <>
              <IconButton sx={{ p: 0 }} onClick={() => setWeb3DrawerOpen(true)}>
                <Tooltip title="Open wallet">
                  <AccountBalanceWalletIcon />
                </Tooltip>
              </IconButton>
              <IconButton sx={{ p: 0 }} onClick={() => setUserDrawerOpen(true)}>
                <Tooltip title="Open User menu">
                  <Avatar
                    alt={userProfile.name.first}
                    src={userProfile.picture.thumbnail}
                  />
                </Tooltip>
              </IconButton>
            </>
          ) : (
            <Avatar alt="Loading..." src="" />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export const AppBarShimView = () => <Box sx={{ height: 60 }} />;
export default AppBarView;
