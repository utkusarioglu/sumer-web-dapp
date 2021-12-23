import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import {
  selectUserDrawerOpen,
  setUserDrawerOpen,
} from "_/slices/app/app.slice";
import { selectUserProfile } from "_slices/user/user.slice";
import { Typography } from "@mui/material";

function UserDrawerView() {
  const state = useSelector(selectUserDrawerOpen);
  const userProfile = useSelector(selectUserProfile);

  if (!userProfile) {
    return null;
  }

  return (
    <Drawer
      anchor="right"
      open={state}
      onClose={() => setUserDrawerOpen(false)}
    >
      <Box sx={{ width: 250 }}>
        <Container>
          <Avatar
            src={userProfile.picture.large}
            sx={{ width: 150, height: 150, mx: "auto", mt: 3, mb: 2 }}
          />
          <Typography variant="h6" align="center">
            {userProfile.name.first} {userProfile.name.last}
          </Typography>
          <Typography align="center">{userProfile.email}</Typography>
        </Container>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default UserDrawerView;
