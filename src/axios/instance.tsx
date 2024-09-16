import TokenManager from "brainless-token-manager";
import axios from "axios";
import { handlerDeleteCookie,handlerGetCookie,handlerSetCookie } from "../cookies";

const tokenManager = new TokenManager({
  getAccessToken: async () => {
    const token = handlerGetCookie("accessToken");
    return token ? token : "";
  },
  getRefreshToken: async () => {
    const refreshToken = handlerGetCookie("refreshToken");
    return refreshToken ? refreshToken : "";
  },
  onInvalidRefreshToken: () => {
    handlerDeleteCookie("accessToken");
    handlerDeleteCookie("refreshToken");
  },

  executeRefreshToken: async () => {
    const refreshToken = handlerGetCookie("refreshToken");

    if (!refreshToken) {
      return {
        token: "",
        refresh_token: "",
      };
    }

    const response = await axiosInstant.post("/auth/refresh-token", {
      refreshToken,
    });
    const { accessToken: accessTokenNew, refreshToken: refreshTokenNew } =
      response.data;

    return {
      token: accessTokenNew,
      refresh_token: refreshTokenNew,
    };
  },
  onRefreshTokenSuccess: ({ token, refresh_token }) => {
    if (token && refresh_token) {
      handlerSetCookie("accessToken", token);
      handlerSetCookie("refreshToken", refresh_token);
    }
  },
});

export const VITE_APP_API = "https://api-test-web.agiletech.vn";

export const axiosInstant = axios.create({
  baseURL: VITE_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const tokenManagerInstance = async (
  suffixUrl: string,
  configs: any = {}
) => {
  const token = configs?.token || (await tokenManager.getToken());

  const updatedConfig = {
    ...configs,
    headers: {
      ...configs.headers,
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstant(suffixUrl, updatedConfig);
};
