// Shared by both proxy.ts (edge/node runtime) and server-only admin code,
// so this file must stay free of Node-specific or server-only imports.
export const ADMIN_SESSION_COOKIE = "admin_session";
// Not the password itself — a fixed token issued only after a correct
// password check, so guessing the cookie value is harder than guessing "1234".
export const ADMIN_SESSION_TOKEN =
  "ck_7f2b9a1d4e6c8035af1279bd4e0c6a3f9d21b7e5";
