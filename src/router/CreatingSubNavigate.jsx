import { createStackNavigator } from "@react-navigation/stack";

import { Button, Text, TouchableOpacity, View } from "react-native";

import Subscriptions from "../screens/Subscriptions";
import DetailSubscription from "../screens/DetailSubscription";
import BillSummary from "../screens/BillSummary";

const Stack = createStackNavigator();

export default function CreatingSubNavigate() {
  return (
    <Stack.Navigator initialRouteName="AllSubsciptions">
      <Stack.Screen
        name="AllSubsciptions"
        component={Subscriptions}
        options={({ navigation, props }) => ({
          headerBackTitleVisible: false,
          headerRight: () => (
            <Button
              title="Add"
              onPress={() => navigation.navigate("CreatingSub")}
            />
          ),
          headerTitle: "Subscriptions",
          headerTitleStyle: {
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 24,
          },
        })}
      />
      <Stack.Screen
        name="DetailSub"
        component={DetailSubscription}
        options={({ route, navigation }) => {
          return {
            title: route.params.name,
            headerTitleStyle: {
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 24,
            },
            headerBackTitleVisible: false,
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("EditSubscription", {
                      name: route.params.name,
                      price: route.params.price,
                      img: route.params.img,
                      color: route.params.color,
                      firstbill: route.params.firstbill,
                      cycle: route.params.cycle,
                      daytopay: route.params.daytopay,
                    });
                  }}
                >
                  <View className="mx-4">
                    <Text className="text-lg font-semibold">Edit</Text>
                  </View>
                </TouchableOpacity>
              );
            },
          };
        }}
      />
      <Stack.Screen
        name="BillSummary"
        component={BillSummary}
        options={({ navigation, props }) => ({
          headerRight: () => (
            <Button
              title="Edit"
              onPress={() => navigation.navigate("BillEdit")}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
