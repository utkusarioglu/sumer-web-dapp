!process.env.WS_URI && console.error(".env.WS_URI is required");

export const NODE_ENV = process.env.NODE_ENV || "production";
export const WS_URI = process.env.WS_URI || "localhost";
