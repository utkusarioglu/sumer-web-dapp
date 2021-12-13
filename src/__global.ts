declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: "production" | "testing" | "development";
      WS_URI?: string; // url
    }
  }
}

export {};
