import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UserScreen from "./../screens/appScreens/UserScreen";
import LoadScreen from "./../screens/authScreens/LoadScreen";
import LoginScreen from "./../screens/authScreens/LoginScreen";
import SignupScreen from "./../screens/authScreens/SignupScreen";
const AppStack = createStackNavigator({ User: UserScreen });
const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
