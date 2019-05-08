import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { UserLoadingScreen } from "../screens/UserLoadingScreen";
import { UserSignInStack } from "../screens/UserSignInScreen";
import HomeScreen from "../screens/HomeScreen";
import QrScreen from "../screens/QrScreen";
import { SettingsScreen } from "../screens/Settings";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Qr: QrScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: HomeStack,
      UserLoading: UserLoadingScreen,
      UserSignIn: UserSignInStack
    },
    { initialRouteName: "UserLoading" }
  )
);
