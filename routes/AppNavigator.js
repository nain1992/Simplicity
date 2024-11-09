import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome/Welcome";
import Mainservices from "../screens/Mainservices/Mainservices";
import Shelterlocator from "../screens/Shelterlocator/Shelterlocator";
import Shelterpage from "../screens/Shelterpage/Shelterpage";
import Booking from "../screens/Booking/Booking";
import BookingConfirmation from "../screens/BookingConfirmation/BookingConfirmation";

const { Navigator, Screen } = createStackNavigator();

function AppNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Mainservices" component={Mainservices} />
      <Screen name="Shelterlocator" component={Shelterlocator} />
      <Screen name="Shelterpage" component={Shelterpage} />
      <Screen name="Booking" component={Booking} />
      <Screen name="BookingConfirmation" component={BookingConfirmation} />
    </Navigator>
  );
}
export const AppNavigator = () => (
  <NavigationContainer>
    <AppNavigation />
  </NavigationContainer>
);
