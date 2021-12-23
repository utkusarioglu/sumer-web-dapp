import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

export class WalletConnectFacade {
  private connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org", // Required
    qrcodeModal: QRCodeModal,
  });

  async init() {
    if (!this.connector.connected) {
      await this.connector.createSession();
    }
    this.subscribe();
    return this;
  }

  private subscribe() {
    this.connector.on("connect", (error, payload) => {
      if (error) {
        throw error;
      }

      const { accounts, chainId } = payload.params[0];
      console.log(accounts, chainId);
    });

    this.connector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      const { accounts, chainId } = payload.params[0];
      console.log(accounts, chainId);
    });

    this.connector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }
      console.log(payload);
    });
  }

  accounts() {
    return this.connector.accounts;
  }

  kill() {
    return this.connector.killSession();
  }
}
