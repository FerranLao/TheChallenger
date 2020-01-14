//Auth Actions
export const getToken = token => ({ type: "SET_TOKEN", token });
export const logOut = () => ({ type: "LOG_OUT", undefined });
export const decodedToken = decoded => ({ type: "DECODED_TOKEN", decoded });
export const removeInfo = () => ({ type: "REMOVE_INFO" });
export const addInfo = data => ({ type: "ADD_INFO", data });
