import AppBar from "@mui/material/AppBar";
// container toolbar typography avatar button tooltip
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectUser } from "_/slices/user/user.slice";

const AppBarView = () => {
  const user = useSelector(selectUser);

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
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div" align="center">
              App
            </Typography>
          </Box>
          <Tooltip title="Open User menu">
            <IconButton sx={{ p: 0 }}>
              {user.isLoaded ? (
                <Avatar alt={user.name.first} src={user.picture.thumbnail} />
              ) : (
                <Avatar alt="Loading..." src="" />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarView;
