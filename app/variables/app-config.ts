import { cleanEnv, str } from 'envalid';

let envs = cleanEnv(process.env, {
  REACT_APP_API_URL: str({
    devDefault: 'http://13.127.11.84:8085',
  }),
  REACT_APP_GOOGLE_API_KEY: str({
    devDefault:
      'ArzpuCDVJkcuBXSWS_vXCeRRbDh1OJssB_wGAKCF1MVYLBwxDafuw5q0CcLYo1Y0',
  }),
  REACT_APP_GOOGLE_REST_API_KEY: str({
    devDefault:
      'Ao9PFmQwSXJV1d36fANi1Tbp3sECeIiZPHzuO4G5Hf7Z_0BR0F7RSabbjFi9xf3S',
  }),
  REACT_APP_GOOGLE_BASE_URL: str({
    devDefault: 'https://dev.virtualearth.net/REST/v1',
  }),
});

export const API_URL = envs.REACT_APP_API_URL;
export const GOOGLE_API_KEY = envs.REACT_APP_GOOGLE_API_KEY;
export const GOOGLE_REST_API_KEY = envs.REACT_APP_GOOGLE_REST_API_KEY;
export const GOOGLE_BASE_URL = envs.REACT_APP_GOOGLE_BASE_URL;
