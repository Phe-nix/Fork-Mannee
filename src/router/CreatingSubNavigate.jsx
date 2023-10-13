import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

import Subscriptions from "../screens/Subscriptions";
import BillSummary from "../screens/BillSummary";

const Stack = createStackNavigator();

export default function CreatingSubNavigate() {
  return (
    <Stack.Navigator initialRouteName="AllSubsciptions">
      <Stack.Screen
        name="AllSubsciptions"
        component={Subscriptions}
        options={({ navigation, props }) => ({
          headerLeft: () => <Button title="Setting" />,

          headerRight: () => (
            <Button
              title="Add"
              onPress={() => navigation.navigate("CreatingSub")}
            />
          ),
        })}
      />
      <Stack.Screen name="BillSummary" component={BillSummary} />
    </Stack.Navigator>
  );
}
