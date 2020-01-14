import { logOut, addInfo, removeInfo, getToken, decodedToken } from "./index";

export const dispatcher = actions => {
  return dispatch => {
    const dispatcher = {};
    actions.forEach(e => {
      switch (e) {
        case "logOut":
          dispatcher.logOut = () => dispatch(logOut());
          break;
        case "addInfo":
          dispatcher.addInfo = info => dispatch(addInfo(info));
          break;
        case "removeInfo":
          dispatcher.removeInfo = () => dispatch(removeInfo());
          break;
        case "getToken":
          dispatcher.getToken = token => dispatch(getToken(token));
          break;
        case "decodedToken":
          dispatcher.decodedToken = decoded => dispatch(decodedToken(decoded));
          break;
        default:
          break;
      }
    });
    return dispatcher;
  };
};
