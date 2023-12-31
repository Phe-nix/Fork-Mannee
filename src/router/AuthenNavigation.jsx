import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

import Login from "../screens/Login";
import Registor from "../screens/Registor";
import MainNavigation from "./MainNavigation";
import CreatingSub from "../screens/CreatingSub";
import OnCreatingSub from "../screens/OnCreatingSub";
import ColorPick from "../screens/ColorPick";
import BillAdd from "../screens/BillAdd";
import BillEdit from "../screens/BillEdit";
import AddMember from "../screens/AddMember";
import FoodAdd from "../screens/FoodAdd";
import FoodEdit from "../screens/FoodEdit";
import EditSubscription from "../screens/EditSubscription";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registor" component={Registor} />
          <Stack.Screen name="MainNavigation" component={MainNavigation} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="CreatingSub" component={CreatingSub} />
          <Stack.Screen
            name="NewSubscription"
            component={OnCreatingSub}
            options={{
              headerShown: true,
              headerTitle: "New Subscription",
              headerBackTitle: " ",
              headerRight: () => <Button title="Add" />,
            }}
          />
          <Stack.Screen
            name="ColorPick"
            component={ColorPick}
            options={{
              headerShown: true,
              headerTitle: "Pick a Color",
              headerBackTitle: " ",
            }}
          />
          <Stack.Screen
            name="EditSubscription"
            component={EditSubscription}
            options={{
              headerShown: true,
              headerTitle: "Edit Subscription",
              headerBackTitle: " ",
            }}
          />
          <Stack.Screen
            name="BillAdd"
            component={BillAdd}
            options={{
              headerShown: true,
              headerTitle: "New Bill",
              headerBackTitle: " ",
              headerRight: () => (
                <Button
                  title="Add"
                  onPress={() => {
                    alert("add new Bill");
                  }}
                />
              ),
            }}
          />
          <Stack.Screen
            name="BillEdit"
            component={BillEdit}
            options={{
              headerShown: true,
              headerTitle: "Edit Bill",
              headerBackTitle: " ",
              headerRight: () => <Button title="Save" />,
            }}
          />
          <Stack.Screen
            name="AddMember"
            component={AddMember}
            options={{
              headerShown: true,
              headerTitle: "Add Member",
              headerBackTitle: " ",
              headerRight: () => <Button title="Add" />,
            }}
          />
          <Stack.Screen
            name="FoodAdd"
            component={FoodAdd}
            options={{
              headerShown: true,
              headerTitle: "New Food",
              headerBackTitle: " ",
              headerRight: () => <Button title="Add" />,
            }}
          />
          <Stack.Screen
            name="FoodEdit"
            component={FoodEdit}
            options={{
              headerShown: true,
              headerTitle: "Edit Food",
              headerBackTitle: " ",
              headerRight: () => <Button title="Save" />,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
