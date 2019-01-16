import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import { UserLoadingScreen } from "../screens/UserLoadingScreen";
import { UserSignInStack } from "../screens/UserSignInScreen";

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    UserLoading: UserLoadingScreen,
    UserSignIn: UserSignInStack
  },
  { initialRouteName: "UserLoading" }
);
