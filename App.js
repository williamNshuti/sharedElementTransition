import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
// import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SalonHome from "./SalonHome";
import SalonDetailsList from "./SalonDetails";
const Stack = createSharedElementStackNavigator();

// enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="salonHome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="salonHome" component={SalonHome} />
        <Stack.Screen
          name="salonListDetails"
          component={SalonDetailsList}
          options={() => ({
            gestureEnabled: false,

            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
