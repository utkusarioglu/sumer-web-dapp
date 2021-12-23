import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import {
  selectWeb3DrawerOpen,
  setUserDrawerOpen,
} from "_/slices/app/app.slice";
import { selectUserProfile, selectAccounts } from "_slices/user/user.slice";
import { Typography } from "@mui/material";
import Web3ConnectOptionsView from "../web3-connect-options/Web3ConnectOptions.view";

function Web3DrawerView() {
  const state = useSelector(selectWeb3DrawerOpen);
  const userProfile = useSelector(selectUserProfile);
  const accounts = useSelector(selectAccounts);

  if (!userProfile) {
    return null;
  }

  return (
    <Drawer
      anchor="bottom"
      open={state}
      onClose={() => setUserDrawerOpen(false)}
    >
      <Box>
        <Container>
          <Typography variant="h6" align="center">
            Connect to your wallet
          </Typography>
        </Container>
        {accounts ? (
          <Container>
            {accounts.map((account) => (
              <Typography key={account}>
                You are connected through: {account.slice(0, 7)}
              </Typography>
            ))}
          </Container>
        ) : (
          <Container>
            <Web3ConnectOptionsView />
          </Container>
        )}
      </Box>
    </Drawer>
  );
}

export default Web3DrawerView;
