declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "production" | "testing" | "development";
      WS_URI?: string; // url
      INFURA_API_KEY?: string;
      WALLET_CONNECT_API_KEY?: string;
    }
  }

  interface Window {
    ethereum: any;
  }
}

export {};
