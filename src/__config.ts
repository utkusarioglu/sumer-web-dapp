!process.env.WS_URI && console.error(".env.WS_URI is required");

/*
 * Environment variable based config
 */
export const NODE_ENV = process.env.NODE_ENV || "production";
export const WS_URI = process.env.WS_URI || "localhost";
export const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
export const WALLET_CONNECT_API_KEY = process.env.WALLET_CONNECT_API_KEY || "";

/*
 * Static config
 */
export const APP_NAME = "Sumer";
