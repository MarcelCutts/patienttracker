import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator, { HomeStack } from "./MainTabNavigator";
import { UserLoadingScreen } from "../screens/UserLoadingScreen";
import { UserSignInStack } from "../screens/UserSignInScreen";
import HomeScreen from "../screens/HomeScreen";

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: HomeStack,
    UserLoading: UserLoadingScreen,
    UserSignIn: UserSignInStack
  },
  { initialRouteName: "UserLoading" }
);
