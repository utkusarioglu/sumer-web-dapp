import { ethers } from "ethers";
import { WalletConnectFacade } from "./walletconnect";

type ConnectParams = {
  method: "walletconnect" | "metamask";
  onConnect: () => void;
  onDisconnect: () => void;
  setAccounts: (accounts: string[]) => void;
  onError: (error: unknown) => void;
};

export class Web3Service {
  private provider!: ethers.providers.Web3Provider;
  private signer!: ethers.Signer;
  // @ts-ignore
  private connector!: WalletConnectFacade;

  async connect(params: ConnectParams) {
    switch (params.method) {
      case "metamask":
        return this.metamask(params);
      case "walletconnect":
        this.connector = await new WalletConnectFacade().init();
        break;
      default:
        throw new Error("Unrecognized method");
    }
  }

  kill() {
    this.connector.kill();
  }

  async metamask({
    onConnect,
    onDisconnect,
    setAccounts,
    onError,
  }: ConnectParams) {
    if (!window.ethereum) {
      throw new Error("No ethereum object detected");
    }
    try {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await this.provider.send("eth_requestAccounts", []);
      this.signer = this.provider.getSigner();
      this.provider.on("connect", () => {
        console.log("connect");
        onConnect();
      });
      this.provider.on("disconnect", () => {
        console.log("disconnect");
        onDisconnect();
      });

      if (accounts.length) {
        setAccounts(accounts);
      }
      console.log(this.provider, this.signer);
    } catch (e) {
      onError(e);
    }
  }
}

export default new Web3Service();
