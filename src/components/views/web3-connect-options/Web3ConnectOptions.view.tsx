import Button from "@mui/material/Button";
import web3Service from "_services/web3/web3.service";
import { setWeb3Connected } from "_slices/app/app.slice";
import { setAccounts } from "_slices/user/user.slice";

const Web3ConnectOptionsView = () => {
  const buttonOnClick = (method: "walletconnect" | "metamask") => {
    web3Service.connect({
      method,
      onConnect: () => setWeb3Connected(true),
      onDisconnect: () => {
        setWeb3Connected(false);
      },
      onError: (error: unknown) => console.log("error callback", error),
      setAccounts,
    });
  };

  return (
    <>
      <Button
        onClick={() => buttonOnClick("metamask")}
        variant="contained"
        fullWidth
      >
        Metamask
      </Button>
      <Button
        onClick={() => buttonOnClick("walletconnect")}
        variant="contained"
        fullWidth
      >
        WalletConnect
      </Button>
      <Button onClick={() => web3Service.kill()}>Kill Session</Button>
    </>
  );
};

export default Web3ConnectOptionsView;
