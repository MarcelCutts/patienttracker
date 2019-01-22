import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import { UserLoadingScreen } from "../screens/UserLoadingScreen";
import { UserSignInStack } from "../screens/UserSignInScreen";
import HomeScreen from "../screens/HomeScreen";
import QrScreen from "../screens/QrScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Qr: QrScreen
  },
  {
    initialRouteName: "Home"
  }
);

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
