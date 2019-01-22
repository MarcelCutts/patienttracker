import React from "react";
import { Platform } from "react-native";
import * as rn from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import QrScreen from "../screens/QrScreen";

export const HomeStack = rn.createStackNavigator(
  {
    Home: HomeScreen,
    Qr: QrScreen
  },
  {
    initialRouteName: "Home"
  }
);
