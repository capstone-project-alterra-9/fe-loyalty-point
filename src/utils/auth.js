import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token") || Cookies.get("refreshToken")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  getRefreshToken() {
    return Cookies.get("refreshToken");
  },
  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    navigate("/login");
  },
  // storeUserInfoToCookie(data) {
  //   if (!data.access || !data.refresh) return null;
  //   const { access, refresh } = data;
  //   const accessExpires = new Date(access.expires);
  //   const refreshExpires = new Date(refresh.expires);
  //   Cookies.set("token", access.token, { expires: accessExpires });
  //   Cookies.set("refreshToken", refresh.token, { expires: refreshExpires });
  //   return data;
  // },
  store(data) {
    if (!data.data.token || !data.data.refreshToken) return null;
    Cookies.set("token", data.data.token);
    Cookies.set("refreshToken", data.data.refreshToken);
    return data;
  },
};

export default Auth;
